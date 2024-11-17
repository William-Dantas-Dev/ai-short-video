"use client"
import { db } from '@/configs/db';
import { Users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

const Provider = ({ children }: { children: React.ReactNode }) => {

  const { user } = useUser();

  useEffect(() => {
    user && isNewUser();
  }, [user])

  const isNewUser = async () => {
    const emailAddress = user?.primaryEmailAddress?.emailAddress;

    if (emailAddress) {
      const result = await db.select().from(Users)
        .where(eq(Users.email, emailAddress));
        //console.log(result);
      if (!result[0]) {
        await db.insert(Users).values({
          name: user.fullName ?? "", // Ensure this matches your schema field
          email: emailAddress,
          imageUrl: user?.imageUrl,
        });
      }
    }
  };


  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
