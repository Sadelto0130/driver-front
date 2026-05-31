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
import { Input } from '../ui/input'
import { DriverCard } from './driver-card'

interface Props {
  trip: Trip
}

export function AssignDriverSheet({
  trip
}: Props) {
  const [search, setSearch] = useState("")

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

  const handleAssign = (driver: Driver) => {
    console.log(
      "Asignado",
      driver.name,
      "al servicio",
      trip.serviceNumber
    )
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
          Asignar conductor
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className='w-[640px] p-0 sm:max-w-[460px]'
      >
        <div className="flex h-full flex-col">
          <SheetHeader className='border-b border-slate-100 px-8 py-6'>
            <SheetTitle>
              Asignar conductor
            </SheetTitle>

            <div className='mt-4'>
              <p className='text-2xl font-bold text-slate-900'>
                Servicio # {trip.serviceNumber}
              </p>

              <div className='mt-3'>
                <p>{trip.origin}</p>

                <p className="my-1 text-slate-400">
                  ↓
                </p>

                <p>
                  {trip.destination}
                </p>
              </div>
            </div>
          </SheetHeader>

          <div className='p-6'>
            <Input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder='Buscar conductor...'
            />
          </div>

          <div className='flex-1 overflow-y-auto px-6 pb-6'>
            <div className='space-y-4'>
              {drivers.map((driver) => (
                <DriverCard 
                  key={driver.id}
                  driver={driver}
                  onAssign={handleAssign}
                />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}