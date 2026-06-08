"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { mockDrivers } from '@/mocks/driver'
import { Driver } from '@/types/driver'
import { Trip } from '@/types/trip'
import { useMemo, useState } from 'react'
import { Input } from '../../../components/ui/input'
import { DriverCard } from './driver-card'
import { Search } from 'lucide-react'

interface Props {
  trip: Trip
}

function getAssignButtonLabel(status: Trip["status"]) {
  switch(status) {
    case "ASSIGNED":
      return "Reasignar conductor"
    
    default:
      return "Asignar conductor"
  }
}

export function AssignDriverSheet({
  trip
}: Props) {
  const [search, setSearch] = useState("")
  const [assigningDriverId, setAssigningDriverId] = useState<string | null>(null)

  const drivers = useMemo(() => {
    const order = {
      AVAILABLE: 0,
      BUSY: 1,
      OFFLINE: 2
    }

    return [...mockDrivers]
      .sort((a, b) => {  
        if(order[a.status] !== order[b.status]) {
          return (
            order[a.status] - order[b.status]
          )
        }

        return (a.distanceKm - b.distanceKm)
      })
      .filter((driver) =>
        driver.name
          .toLowerCase()
          .includes(search.toLowerCase())
      )      
  }, [search])

  const handleDriverSelection = async (driver: Driver) => {
    setAssigningDriverId(driver.id)

    const isReassignment = trip.status === "ASSIGNED";

    if(isReassignment) {
      setTimeout(() => {
        setAssigningDriverId(null)
      }, 2000) 

      // dispatchApi.reassignDriver()
    } else {
      setTimeout(() => {
        setAssigningDriverId(null)
      }, 2000)
      try {
        //TODO: dispatchApi.assignDriver()
      } catch (error) {
        setAssigningDriverId(null)
      }
    }

  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='
          w-full
          rounded-2xl
          bg-blue-600
          px-4 py-3
          font-medium
          text-white
          transition-colors
          hover:bg-blue-700
        '>
          {getAssignButtonLabel(trip.status)}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className='w-[640px] p-0 sm:max-w-[460px] shadow-2xl'
      >
        <div className="flex h-full flex-col">
          <SheetHeader className='
          bg-white/50
            px-6 py-5
            shadow-sm
            border-b 
          border-slate-200 
          '>
            <SheetTitle className='
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-slate-700
            '>
              {getAssignButtonLabel(trip.status)}
            </SheetTitle>

            <p className='text-xl font-bold text-slate-900'>
              Servicio # {trip.serviceNumber}
            </p>
            
            <p className='mt-2 text-sm font-bold text-slate-700'>
              {trip.origin}
              <span className="mx-2">→</span>
              {trip.destination}
            </p>
          </SheetHeader>

          <div className='border-b border-slate-100 p-4'>
            <div className="relative">
              <Search className='
                absolute
                left-3
                top-1/2
                h-4 w-4
                -translate-y-1/2
                text-slate-400
              '
              />
              <Input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder='Buscar conductor...'
                className='
                  h-11
                  rounded-xl
                  border-slate-200
                  pl-10
                  shadow-none
                  focus-visible:ring-1
                  bg-slate-100
                '
              />
            </div>
          </div>

          <div className='flex-1 overflow-y-auto mt-3 px-6 pb-6'>
            <div className='space-y-4'>
              {drivers.map((driver) => (
                <DriverCard 
                  key={driver.id}
                  driver={driver}
                  onAssign={handleDriverSelection}    
                  assigning={assigningDriverId === driver.id}     
                  isAssigning={assigningDriverId !== null}         
                />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}