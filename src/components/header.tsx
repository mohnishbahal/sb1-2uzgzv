import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useStore } from '@/context/store-context';

export function Header() {
  const { selectedStore, setSelectedStore } = useStore();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4 px-6">
        <div className="flex flex-1 items-center gap-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search fixtures, departments..."
            className="w-[300px]"
          />
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedStore} onValueChange={setSelectedStore}>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select store" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="store-1">Store #1 - Downtown</SelectItem>
              <SelectItem value="store-2">Store #2 - Westfield Mall</SelectItem>
              <SelectItem value="store-3">Store #3 - East Side Plaza</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Data</Button>
          <Button>Import Layout</Button>
        </div>
      </div>
    </header>
  );
}