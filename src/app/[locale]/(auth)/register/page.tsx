import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register() {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Register account</CardTitle>
            <CardDescription>
              Enter your information below to register an account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign in</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="f_name">First Name</Label>
                  <Input
                    id="f_name"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="l_name">Last Name</Label>
                  <Input
                    id="l_name"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="confirm_password">Confirm Password</Label>
                  </div>
                  <Input id="confirm_password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Register
            </Button>
            <Button variant="outline" className="w-full">
              Register with google
            </Button>
          </CardFooter>
        </Card>
    </div>
  )
}
