import { CircleCheck } from 'lucide-react'

export function Activities() {
  return (
    <section className='space-y-8'>
      <div className='space-y-2.5'>
        <h2 className='flex gap-2 items-baseline'>
          <span className='text-xl text-zinc-300 font-semibold'>Dia 17</span>
          <span className='text-xs text-zinc-500'>Sábado</span>
        </h2>
        <p className='text-zinc-500 text-sm'>
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>

      <div className='space-y-2.5'>
        <h2 className='flex gap-2 items-baseline'>
          <span className='text-xl text-zinc-300 font-semibold'>Dia 18</span>
          <span className='text-xs text-zinc-500'>Domingo</span>
        </h2>

        <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
          <CircleCheck className='size-5 text-lime-300' />
          <span className='text-zinc-100'>Academia em grupo</span>
          <span className='text-zinc-400 text-sm ml-auto'>08:00h</span>
        </div>

        <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
          <CircleCheck className='size-5 text-lime-300' />
          <span className='text-zinc-100'>Academia em grupo</span>
          <span className='text-zinc-400 text-sm ml-auto'>08:00h</span>
        </div>
      </div>
    </section>
  )
}
