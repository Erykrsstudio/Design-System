import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-16 justify-center items-center relative p-10 bg-surface">
        <ThemeSwitch/>
        <h1 className="text-4xl font-bold text-heading">VUI Components</h1>
        <div className="mx-auto flex w-full max-w-5xl gap-16 max-w-[1360px] justify-center flex-wrap">            
            <Card vui={true} className="max-w-[368px] max-md:max-w-[320px]">
                <CardHeader vui={true}>
                    <CardTitle vui={true}>Subscribe to Vultr Newsletter</CardTitle>
                    <CardDescription vui={true}>AI, Cloud, and Tech news from Vultr, plus the latest updates and promotions.</CardDescription>
                </CardHeader>
                <CardContent form={true}>
                    <Input type="email" placeholder="Enter email address" size="xl" vui={true} />
                    <Button variant="vui-primary" size="vui-xl" className="w-full">
                    Subscribe Now
                    </Button>
                </CardContent>
            </Card>
            <Card vui={true} className="max-w-[368px] context-primary max-md:max-w-[320px]">
                <CardHeader vui={true}>
                    <CardTitle vui={true}>Subscribe to Vultr Newsletter</CardTitle>
                    <CardDescription vui={true}>AI, Cloud, and Tech news from Vultr, plus the latest updates and promotions.</CardDescription>
                </CardHeader>
                <CardContent form={true}>
                    <Input type="email" placeholder="Enter email address" size="xl" vui={true} />
                    <Button variant="vui-primary" size="vui-xl" className="w-full">
                    Subscribe Now
                    </Button>
                </CardContent>
            </Card>
        </div>
      <h1 className="text-4xl font-bold text-heading">Tailwind Components</h1>
      <div className="mx-auto flex w-full max-w-5xl gap-16 max-w-[1360px] justify-center flex-wrap">
        <Card className="max-w-[368px] max-md:max-w-[320px]">
            <CardHeader>
                <CardTitle>Subscribe to Vultr Newsletter</CardTitle>
                <CardDescription>AI, Cloud, and Tech news from Vultr, plus the latest updates and promotions.</CardDescription>
            </CardHeader>
            <CardContent form={true}>
                <Input type="email" placeholder="Enter email address" size="xl" />
                <Button variant="primary" size="xl" className="w-full">
                Subscribe Now
                </Button>
            </CardContent>
        </Card>
        <Card className="max-w-[368px] context-primary max-md:max-w-[320px]">
            <CardHeader>
                <CardTitle>Subscribe to Vultr Newsletter</CardTitle>
                <CardDescription>AI, Cloud, and Tech news from Vultr, plus the latest updates and promotions.</CardDescription>
            </CardHeader>
            <CardContent form={true}>
                <Input type="email" placeholder="Enter email address" size="xl" />
                <Button variant="primary" size="xl" className="w-full">
                Subscribe Now
                </Button>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
