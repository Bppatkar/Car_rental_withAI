import { Button } from '@/components/ui/button';
import { Ghost, Loader2Icon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Creating Car rental app with AI</h1>
      <Button variant="ghost">Click me</Button>
      <Button variant="destructive">Check</Button>
      <Button>
        <Loader2Icon className="animate-spin"> Please wait...</Loader2Icon>
      </Button>
    </div>
  );
}
