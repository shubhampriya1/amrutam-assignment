import { MapPin, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchHeader() {
  return (
    <div className="bg-[#F3F7F3] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Find Expert Doctors For An In-Clinic Session Here
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px] bg-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <SelectValue placeholder="Select Location" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="e.g. Doctor, specialisation, clinic name"
              className="w-full pr-12"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1 bg-[#446A46] hover:bg-[#385839]"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

