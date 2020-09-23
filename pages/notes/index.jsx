import React from 'react';
import Link from 'next/link';

const Page = () => (
  <div>
    <h1>Note index path</h1>

    <Link href="/notes/[id]" as={`/notes/1`}>note 1</Link>
  </div>
);

export default Page;