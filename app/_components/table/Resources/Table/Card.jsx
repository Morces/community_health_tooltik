"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

const Card = ({ doc }) => {
  function handleDelete() {}

  return (
    <div className="shadow-xl rounded-xl p-4 mb-4 border-t flex-1">
      <h2 className="font-bold text-lg mb-2">{doc.name}</h2>
      <p className="text-sm text-gray-600 mb-2">Type: {doc.resource_type}</p>
      <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
      <div className="flex justify-between">
        <Link
          href={`${doc?.url}`}
          target="_blank"
          className="flex items-center"
        >
          <FileText className="text-md" />
          <span className="text-sm">View</span>
        </Link>
        <button
          onClick={() => handleDelete(doc)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
