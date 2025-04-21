"use client";

import { useState } from "react";
import {
  ChevronLeft,
  GraduationCap,
  Search,
  Users,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ClassForm from "./forms/academic/class-form";
import SectionForm from "./forms/academic/section-form";






// Sample data structure (combined)
const classData = [
  {
    id: 5,
    name: "Class 5",
    totalStudents: 120,
    sections: [
      { id: 1, name: "5A", teacher: "Ms. Sarah", students: 40 },
      { id: 2, name: "5B", teacher: "Mr. John", students: 38 },
      { id: 3, name: "5C", teacher: "Ms. Emily", students: 42 },
    ],
  },
  {
    id: 6,
    name: "Class 6",
    totalStudents: 80,
    sections: [
      { id: 4, name: "6A", teacher: "Mr. Wilson", students: 40 },
      { id: 5, name: "6B", teacher: "Ms. Brown", students: 40 },
    ],
  },
  {
    id: 7,
    name: "Class 7",
    totalStudents: 160,
    sections: [
      { id: 6, name: "7A", teacher: "Mr. Davis", students: 40 },
      { id: 7, name: "7B", teacher: "Ms. Miller", students: 40 },
      { id: 8, name: "7C", teacher: "Mr. Taylor", students: 40 },
      { id: 9, name: "7D", teacher: "Ms. Anderson", students: 40 },
    ],
  },
  {
    id: 8,
    name: "Class 8",
    totalStudents: 115,
    sections: [
      { id: 10, name: "8A", teacher: "Mr. Thomas", students: 38 },
      { id: 11, name: "8B", teacher: "Ms. White", students: 39 },
      { id: 12, name: "8C", teacher: "Mr. Harris", students: 38 },
    ],
  },
  {
    id: 9,
    name: "Class 9",
    totalStudents: 75,
    sections: [
      { id: 13, name: "9A", teacher: "Ms. Clark", students: 38 },
      { id: 14, name: "9B", teacher: "Mr. Lewis", students: 37 },
    ],
  },
];

export default function ClassManagement() {
  const [selectedClass, setSelectedClass] = useState(classData[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = classData.filter((classItem) =>
    classItem.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClass = () => {
    console.log("Add new class");
  };

  const handleEditClass = (classId: number) => {
    console.log("Edit class", classId);
  };

  const handleDeleteClass = (classId: number) => {
    console.log("Delete class", classId);
  };

  return (
    <div className="grid h-[100vh] md:grid-cols-[330px_1fr] p-4">
      {/* Left Sidebar */}
      <div className="flex flex-col bg-white ">
        <div className="flex h-14 items-center justify-between  px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Classes</h2>
          </div>
        <ClassForm />
     
        </div>
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search classes..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-8.5rem)]">
          <div className="space-y-1 p-2">
            {filteredClasses.map((classItem) => (
              <div
                key={classItem.id}
                onClick={() => setSelectedClass(classItem)} // Make entire div clickable
                className={`group rounded-lg transition-colors cursor-pointer ${
                  selectedClass.id === classItem.id
                    ? "bg-muted"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="font-medium">{classItem.name}</div>
                  <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click event from triggering the parent div's onClick
                        handleEditClass(classItem.id);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click event from triggering the parent div's onClick
                        handleDeleteClass(classItem.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{classItem.totalStudents} students</span>
                  </div>
                  <span>{classItem.sections.length} sections</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}

      <div className="flex flex-col bg-white p-6 border border-zinc-200 rounded-lg ">
        <div className="flex items-center justify-between border-b pb-2 mb-4">
          <div>
            <h1 className="text-xl font-semibold">{selectedClass.name}</h1>
            <p className="text-sm text-gray-500">
              Classes / {selectedClass.name}
            </p>
          </div>
          <SectionForm />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedClass.sections.map((section) => (
            <Card key={section.id} className="group">
              <CardHeader className="pb-3">
                <CardTitle>{section.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <span className="font-medium">Class Teacher:</span>{" "}
                  {section.teacher}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{section.students} students</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
