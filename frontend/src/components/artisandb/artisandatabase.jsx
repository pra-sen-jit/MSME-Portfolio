import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Download, Pencil, Trash2 } from "lucide-react";

const artisans = [
  { name: "Artisan A", spec: "Ornaments", email: "john@example.com", phone: "+1 234-567-8900" },
  { name: "Artisan B", spec: "Idolmaker", email: "maria@example.com" },
  { name: "Artisan C", spec: "Metalworking", phone: "+1 345-678-9012" },
  { name: "Artisan D", spec: "Utensils", email: "john@example.com", phone: "+1 234-567-8900" },
  { name: "Artisan E", spec: "Premium Products", email: "maria@example.com" },
  { name: "Artisan F", spec: "Metalworking", phone: "+1 345-678-9012" },
  { name: "Artisan G", spec: "Idol Making", email: "john@example.com", phone: "+1 234-567-8900" },
  { name: "Artisan H", spec: "Ornaments", email: "maria@example.com" },
  { name: "Artisan I", spec: "Metalworking", phone: "+1 345-678-9012" },
  { name: "Artisan J", spec: "Ornaments", email: "maria@example.com" },
];

export default function ArtisanDB() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span>🔨</span> Artisans Database
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="w-4 h-4" /> Export
          </Button>
          <Button>+ Add Artisan</Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search artisans..." className="w-1/2" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              All Specializations <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="p-2">(Filters here)</div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card>
        <CardContent className="overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Specialization</th>
                <th className="p-3">Contact Details</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artisans.map((artisan, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-2">
                    <span>👤</span> {artisan.name}
                  </td>
                  <td className="p-3">{artisan.spec}</td>
                  <td className="p-3 space-y-1">
                    {artisan.email && <div>📧 {artisan.email}</div>}
                    {artisan.phone && <div>📞 {artisan.phone}</div>}
                  </td>
                  <td className="p-3 flex gap-2">
                    <Button size="icon" variant="ghost"><Pencil className="w-4 h-4" /></Button>
                    <Button size="icon" variant="ghost"><Trash2 className="w-4 h-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div>Showing 1-10 of 500 artisans</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">&lt;</Button>
          <Button size="sm" variant="default">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">&gt;</Button>
        </div>
      </div>
    </div>
  );
}
