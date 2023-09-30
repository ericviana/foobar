import { Mail, Tractor } from "lucide-react"
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='p-10 rinin'>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button variant="destructive" >
        <Tractor className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  )
}
