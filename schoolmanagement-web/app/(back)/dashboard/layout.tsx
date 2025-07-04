import AppSidebar from '@/components/dashboard/sidebar/app-sidebar'
import SidebarHeader from '@/components/dashboard/sidebar/sidebar-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

export default function Dashboardlayout({children}:{children:ReactNode}) {
  return (
    <div>
      <SidebarProvider>
      <AppSidebar />
      
      <SidebarInset>
        <SidebarHeader />
        
        {children}
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}
