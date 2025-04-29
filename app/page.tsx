"use client";

import { useState } from "react";
import { SearchForm } from "@/components/search-form";

export default function Home() {
  const [searchUrl, setSearchUrl] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (url: string) => {
    setSearchUrl(url);
    setIsSearching(true);
    
    // Here you would typically implement the actual search functionality
    // For now, we'll just simulate a search
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Company Researcher</h1>
        <p className="text-muted-foreground">Enter a URL to search for company information</p>
      </header>
      
      <main className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <SearchForm onSearch={handleSearch} />
          
          {isSearching && (
            <div className="text-center">
              <p>Searching {searchUrl}...</p>
            </div>
          )}
          
          {searchUrl && !isSearching && (
            <div className="w-full p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              <p>URL: {searchUrl}</p>
              <p className="text-muted-foreground mt-2">
                This is where search results would appear.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Company Researcher</p>
      </footer>
    </div>
  );
}
