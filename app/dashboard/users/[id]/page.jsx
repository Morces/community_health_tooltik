"use client";

import { useRouter } from "next/navigation";

const UserAction = () => {
  const router = useRouter();

  console.log(router);
  const { id, slug } = router.query;

  if (!slug) {
    return <div>Loading...</div>;
  }

  const [action] = slug;

  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      {action === "edit" ? (
        <>
          <h1>Edit Item</h1>
          <p>Editing item with ID: {id}</p>
          {/* Add form or components to edit the item's information */}
        </>
      ) : (
        <>
          <h1>View Item</h1>
          <p>Viewing item with ID: {id}</p>
          {/* Add components to display the item's information */}
        </>
      )}
    </div>
  );
};

export default UserAction;
