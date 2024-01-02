import Highlighter, { HighlighterItem } from "./effects/highlighter";


interface BoxProps {}

const Box = () => {
  return (
    <div>
    <Highlighter>
<div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Infinite options</h3>
                          <p className="text-slate-400">Quickly apply filters to refine your issues lists and create custom views.</p>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
  );
}
export default Box;