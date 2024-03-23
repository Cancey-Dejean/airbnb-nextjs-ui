"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCountries } from "@/lib/getCountries";
import { useState } from "react";

export default function AddressRoute() {
  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
          Where is your Home located?
        </h2>
      </div>

      <form>
        <input type="hidden" name="homeId" value="" />
        <input type="hidden" name="countryValue" value="" />
        <div className="w-3/5 mx-auto mb-36">
          <div className="mb-5">
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.flag} {item.label} / {item.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* <LazyMap locationValue={locationValue} /> */}
        </div>

        {/* <CreatioBottomBar /> */}
      </form>
    </>
  );
}
