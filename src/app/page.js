'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import documentsAvaibles from './axios/documentsRequest';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (docType) => {
    console.log(docType);
  };

  useEffect(() => {
    const loadDocuments = async () => {
      const data =  await documentsAvaibles()

      console.log(data)
    }

    loadDocuments();
  }, [])

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
        <div className="flex items-center space-x-4">
          <Image src="/Docs.png" alt="Google Docs" width={30} height={30} />
          <h1 className="text-lg font-semibold">Secretar-IA</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Pesquisar documentos"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none">
            Pesquisar
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 py-24">
       
      </main>
    </div>
  );
}
