"use client";

import { useEffect, useState } from "react";

export default function TestAPI() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function testAPI() {
      try {
        const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        console.log('Testing API with URL:', STRAPI_URL);
        
        const response = await fetch(`${STRAPI_URL}/api/services?populate=*`, {
          cache: 'no-store',
        });
        
        const data = await response.json();
        setResult({
          status: response.status,
          ok: response.ok,
          data: data
        });
      } catch (error: any) {
        setResult({
          error: error.message,
          stack: error.stack
        });
      } finally {
        setLoading(false);
      }
    }
    
    testAPI();
  }, []);

  return (
    <div className="p-8 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Strapi API Test</h1>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          STRAPI_URL: {process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
          <pre className="text-xs">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Checklist:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ Strapi is running at http://localhost:1337</li>
          <li>✅ Services are created and published in Strapi</li>
          <li>✅ Public permissions enabled for Service (find & findOne)</li>
          <li>✅ Images uploaded to services</li>
        </ul>
      </div>

      <div className="mt-4">
        <a 
          href="http://localhost:1337/api/services?populate=*" 
          target="_blank"
          className="text-blue-600 underline"
        >
          Open API directly in browser
        </a>
      </div>
    </div>
  );
}
