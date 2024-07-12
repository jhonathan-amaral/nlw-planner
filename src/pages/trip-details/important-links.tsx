import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
    <section className='space-y-6'>
      <h2 className='font-semibold text-xl'>Links importantes</h2>
      <div className='space-y-5'>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <h3 className='font-medium text-zinc-100'>Reserva do Booking</h3>
            <a
              href='#'
              className='text-xs text-zinc-400 truncate hover:text-zinc-200'>
              https://www.booking.com/hotel/br/faial.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQ3YAQHoAQH4AQKIAgGoAgO4AqnqxrQGwAIB0gIkM2Q4YmQzMTQtNzBmYi00ZDYwLWI2MWMtYmY1MmNmZWU3NzEz2AIF4AIB&sid=b570a5ab76b5b69b0e0f487f8a212eaf&dest_id=-643337;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;hpos=2;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1720825142;srpvid=947ba19939e806d3;type=total;ucfs=1&#hotelTmpl
            </a>
          </div>

          {/* shrink-0 faz com que o ícone não diminua de tamanho ainda que seja "espremido" pelos elementos ao redor */}
          <Link2 className='text-zinc-400 size-5 shrink-0' />
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <div className='space-y-1.5'>
          <h3 className='font-medium text-zinc-100'>Reserva do Booking</h3>
          <a
            href='#'
            className='text-xs text-zinc-400 truncate hover:text-zinc-200'>
           https://www.booking.com/hotel/br/faial.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdILVgEaCCIAQGYAS24AQfIAQ3YAQHoAQH4AQKIAgGoAgO4AqnqxrQGwAIB0gIkM2Q4YmQzMTQtNzBmYi00ZDYwLWI2MWMtYmY1MmNmZWU3NzEz2AIF4AIB&sid=b570a5ab76b5b69b0e0f487f8a212eaf&dest_id=-643337;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;hpos=2;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1720825142;srpvid=947ba19939e806d3;type=total;ucfs=1&#hotelTmpl
          </a>
        </div>
        <Link2 className='text-zinc-400 size-5 shrink-0' />
      </div>

      <Button btnColor='secondary' btnSize='full'>
        <Plus className='size-5' />
        Cadastrar novo link
      </Button>
    </section>
  )
}
