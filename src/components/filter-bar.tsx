import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function FilterBar() {
  const filters = [
    { label: "Hair care", value: "hair-care" },
    { label: "Female", value: "female" },
    { label: "Rs.0-Rs.500", value: "price-range" },
    { label: "Hindi", value: "hindi" },
  ]

  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 space-y-4">
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-50">
                <SelectValue placeholder="Expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Physician</SelectItem>
                <SelectItem value="dermatologist">Dermatologist</SelectItem>
                <SelectItem value="pediatrician">Pediatrician</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-50">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-50">
                <SelectValue placeholder="Fees" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500">Rs. 0 - Rs. 500</SelectItem>
                <SelectItem value="501-1000">Rs. 501 - Rs. 1000</SelectItem>
                <SelectItem value="1001+">Rs. 1001+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-50">
                <SelectValue placeholder="Languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="marathi">Marathi</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-[#F3F7F3]">
              All filters
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <div
                key={filter.value}
                className="flex items-center gap-1 px-3 py-1 bg-[#F3F7F3] rounded-full text-sm"
              >
                {filter.label}
                <button className="hover:bg-gray-200 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

