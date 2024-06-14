import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { getUserById } from '@/server/db/queries/user'
import { populateGoogleUser } from '@/server/actions/auth'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options })
          },
        },
      }
    )
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const { data: {user} } = await supabase.auth.getUser()

      if (!user || !user.id) {
          console.error("User or user ID is undefined");
          return;
      }

      const user_id = user?.id;

      const existing = await getUserById(user_id)

      if (!existing) {
        console.log("user does not exist in db - creating user")

        const userEmail = user.email;
        const name = user.user_metadata.full_name;

        if (!userEmail || !name) {
          return NextResponse.redirect(`${origin}/auth/auth-code-error`)
        }

        const error = await populateGoogleUser(user_id, userEmail, name)

        if (error) {
          return NextResponse.redirect(`${origin}/auth/auth-code-error`)
        }
      }

      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
