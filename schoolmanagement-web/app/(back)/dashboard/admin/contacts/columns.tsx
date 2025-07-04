"use client";
 
import Image from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
 
import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { Contact } from "@/types/types";
import ContactInfoModel from "@/components/DataTableColumns/ContactCard";

export const columns: ColumnDef<Contact>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "fullName",
    header: ({ column }) => <SortableColumn column={column} title="fullName" />,
  },
 
  {
    accessorKey: "email",
    header: 'email',
  },
  {
    accessorKey: "phone",
    header: "phone",
  },
  {
    accessorKey: "school",
    header: "school",
  },
  {
    accessorKey: "country",
    header: "country",
  },
  // {
  //   accessorKey: "imageUrl",
  //   header: "Category Image",
  //   cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  // },
 
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
   {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => <ContactInfoModel contact={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <ActionColumn
          row={row}
          model="contact"
          editEndpoint={`#`}
          id={contact.id?.toString()}

        />
      );
    },
  },
];