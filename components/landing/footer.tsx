import Link from "next/link";

export function Footer(){
    return (
<div class="bg-background rounded-lg shadow">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-foreground">Notello</span>
            </Link>
            <div class="flex flex-wrap items-center mb-6 text-sm font-medium text-foreground sm:mb-0 ">
                <Link href="/pricing">
                    <span class="hover:underline me-4 md:me-6">Pricing</span>
                </Link>
                <Link href="/pricing">
                    <span class="hover:underline me-4 md:me-6">Terms</span>
                </Link>
            </div>
        </div>
        <hr class="my-6 border-secondary sm:mx-auto lg:my-8" />
        <span class="block text-sm text-foreground sm:text-center">© 2023 Notello™. All Rights Reserved.</span>
    </div>
</div>


    );
}
