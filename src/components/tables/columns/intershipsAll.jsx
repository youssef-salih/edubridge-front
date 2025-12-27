import { createColumnHelper } from "@tanstack/react-table";
import Badge from "../../Badge";
import Button from "../../Button";
import { Pen, Trash } from "lucide-react";

export const columns = [
  {
    accessorKey: "title",
    header: "title",
    cell: ({ row }) => {
      return <p className="text-xs md:text-sm ">{row.original.title}</p>;
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => {
      return (
        <Badge className="text-xs md:text-xs" divClassName="w-fit">
          {row.original.duration} mounth
        </Badge>
      );
    },
  },
  {
    accessorKey: "applicants",
    header: "Applicants",
    cell: ({ row }) => {
      return <p className="text-xs md:text-sm ">{row.original.applicants}</p>;
    },
  },
  {
    accessorKey: "skills",
    header: "Skills",
    cell: ({ row }) => {
      return (
        <div className="flex gap-1">
          {row.original.skills.map((skill) => (
            <Badge
              className="text-xs md:text-xs "
              color="bg-primary text-white"
            >
              {skill}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Button variant="secondary">
            <Pen size={15} className="text-primary" />
          </Button>
          <Button variant="destructive">
            <Trash size={15} />
          </Button>
        </div>
      );
    },
  },
];
