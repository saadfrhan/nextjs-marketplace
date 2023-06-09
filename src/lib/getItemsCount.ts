import { cookies } from "next/headers";
import { cartTable, db } from "./drizzle";
import { eq } from "drizzle-orm";

export async function getItemsCount() {
    const cookie = cookies();
    const getUserId = cookie.get('user_id')?.value;
  
    if (!getUserId) {
      return {
        items_count: 0
      }
    } else {
      const response = await db.select({
        items_count: cartTable.items_count
      }).from(cartTable).where(eq(cartTable.user_id, Number(getUserId)))
  
      if (!response[0]?.items_count) {
        return {
          items_count: 0
        }
      } 
      
      if (response[0]?.items_count > 9) {
        return {
          items_count: "+9"
        }
      }
      
  
      return { items_count: response[0]?.items_count }
    }
  }