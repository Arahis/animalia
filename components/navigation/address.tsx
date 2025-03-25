import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";

const Address = () => {
  return (
    <Link href="/contacts">
      <div className="hidden lg:flex items-center gap-2 text-black hover:text-primary">
        <MapPin size={18} />
        <h3 className="font-semibold">Chisinau, str.Burebista 27</h3>
      </div>
    </Link>
  );
};

export default Address;
