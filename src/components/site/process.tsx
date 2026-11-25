import { process } from "@/lib/site"

export function Process() {
  return (
    <section id="process" className="bg-primary text-primary-foreground dark:bg-card dark:text-card-foreground">
      <div className="shell section-y">
        <h2 className="title-lg max-w-4xl">You see working software every two weeks, and decide what comes next.</h2>
        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.name} className="flex flex-col border-t border-current/25 pt-6">
              <h3 className="title-md flex items-baseline justify-between">
                {step.name}
                <span className="font-serif text-2xl text-current/70 italic">{i + 1}</span>
              </h3>
              <p className="mt-4 text-current/75">{step.body}</p>
              <p className="mt-8 text-sm lg:mt-auto lg:pt-10">
                <span className="block text-current/70">You get</span>
                <span className="mt-1 block font-medium">{step.output}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
