import React, { ChangeEvent } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/Select';

const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
  console.log(e.target.value);
};

const DropdownMenu = ({
  children,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) => <div>{children}</div>;

const ComponentExample = () => {
  return (
    <div>
      <DropdownMenu asChild={true}>
        <div>Menu Item</div>
      </DropdownMenu>
      <Select id="example" value="value" onChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select Value" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Item 1</SelectItem>
          <SelectItem value="2">Item 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ComponentExample;
