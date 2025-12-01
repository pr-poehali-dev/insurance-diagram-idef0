import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const processes = [
  { id: 'A1', title: 'Оформление страхового полиса', x: 15, y: 15 },
  { id: 'A2', title: 'Андеррайтинг и оценка рисков', x: 45, y: 35 },
  { id: 'A3', title: 'Выдача страхового договора', x: 75, y: 55 }
];

const controls = [
  { target: 'A1', label: 'Правила страхования', x: 23, y: 5 },
  { target: 'A2', label: 'Тарифы и лимиты', x: 53, y: 5 },
  { target: 'A3', label: 'Нормативные акты', x: 83, y: 5 }
];

const mechanisms = [
  { target: 'A1', label: 'Страховой агент', x: 15, y: 80 },
  { target: 'A2', label: 'ИС андеррайтинга', x: 45, y: 90 },
  { target: 'A3', label: 'Бухгалтерия', x: 75, y: 80 }
];

const FlowDiagram = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">IDEF0: Страховая компания</h1>
          <p className="text-muted-foreground">
            Функциональная декомпозиция процесса оформления страхового полиса
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="p-8 bg-[#0a0a0a] border-2 border-border relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative" style={{ minHeight: '600px' }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <defs>
                    <marker
                      id="arrowhead-input"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#0EA5E9" />
                    </marker>
                    <marker
                      id="arrowhead-output"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
                    </marker>
                    <marker
                      id="arrowhead-control"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#F97316" />
                    </marker>
                    <marker
                      id="arrowhead-mechanism"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#8B5CF6" />
                    </marker>
                  </defs>

                  <line x1="5%" y1="15%" x2="12%" y2="15%" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrowhead-input)" />

                  <line x1="23%" y1="20%" x2="23%" y2="32%" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead-output)" />

                  <line x1="53%" y1="40%" x2="53%" y2="52%" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead-output)" />

                  <line x1="83%" y1="60%" x2="92%" y2="60%" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead-output)" />

                  <line x1="23%" y1="5%" x2="23%" y2="10%" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrowhead-control)" />
                  <line x1="53%" y1="5%" x2="53%" y2="30%" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrowhead-control)" />
                  <line x1="83%" y1="5%" x2="83%" y2="50%" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrowhead-control)" />

                  <line x1="23%" y1="25%" x2="23%" y2="75%" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrowhead-mechanism)" />
                  <line x1="53%" y1="45%" x2="53%" y2="85%" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrowhead-mechanism)" />
                  <line x1="83%" y1="65%" x2="83%" y2="75%" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrowhead-mechanism)" />

                  <line x1="12%" y1="80%" x2="35%" y2="80%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 2" />
                  <line x1="35%" y1="80%" x2="35%" y2="45%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 2" />

                  <line x1="65%" y1="90%" x2="65%" y2="45%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 2" />

                  <line x1="40%" y1="35%" x2="40%" y2="60%" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 2" />
                  <line x1="40%" y1="60%" x2="70%" y2="60%" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 2" />
                </svg>

                {processes.map((process) => (
                  <div
                    key={process.id}
                    className="absolute"
                    style={{ left: `${process.x}%`, top: `${process.y}%`, transform: 'translate(-50%, -50%)', zIndex: 10 }}
                  >
                    <div className="relative group">
                      <div className="bg-[#d946ef] hover:bg-[#e879f9] transition-all rounded-lg p-6 shadow-lg shadow-[#d946ef]/20 min-w-[180px] border-2 border-[#d946ef]">
                        <Badge className="absolute -top-3 -left-3 bg-primary text-primary-foreground font-mono">
                          {process.id}
                        </Badge>
                        <p className="text-sm font-medium text-white text-center leading-tight">
                          {process.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {controls.map((control, idx) => (
                  <div
                    key={`control-${idx}`}
                    className="absolute"
                    style={{ left: `${control.x}%`, top: `${control.y}%`, transform: 'translate(-50%, 0)', zIndex: 5 }}
                  >
                    <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-control))]">
                      <p className="text-xs font-medium text-[hsl(var(--idef0-control))] whitespace-nowrap">
                        {control.label}
                      </p>
                    </div>
                  </div>
                ))}

                {mechanisms.map((mechanism, idx) => (
                  <div
                    key={`mechanism-${idx}`}
                    className="absolute"
                    style={{ left: `${mechanism.x}%`, top: `${mechanism.y}%`, transform: 'translate(-50%, 0)', zIndex: 5 }}
                  >
                    <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-mechanism))]">
                      <p className="text-xs font-medium text-[hsl(var(--idef0-mechanism))] whitespace-nowrap">
                        {mechanism.label}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="absolute" style={{ left: '5%', top: '13%', zIndex: 5 }}>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-input))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-input))] whitespace-nowrap">
                      Заявка клиента
                    </p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '25%', top: '26%', zIndex: 5 }}>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-output))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-output))] whitespace-nowrap">
                      Анкета страхователя
                    </p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '55%', top: '46%', zIndex: 5 }}>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-output))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-output))] whitespace-nowrap">
                      Оценка рисков
                    </p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '86%', top: '58%', zIndex: 5 }}>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-output))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-output))] whitespace-nowrap">
                      Страховой полис
                    </p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '12%', top: '78%', zIndex: 5 }}>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-mechanism))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-mechanism))] whitespace-nowrap">
                      Сотрудник
                    </p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '20%', top: '92%', zIndex: 5 }}>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-mechanism))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-mechanism))] whitespace-nowrap">
                      CRM-система
                    </p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '55%', top: '70%', zIndex: 5 }}>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-[hsl(var(--idef0-output))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-output))] whitespace-nowrap">
                      База данных клиентов
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border relative z-10">
                <div className="text-xs text-muted-foreground font-mono">
                  NODE: A0 | TITLE: Страховая компания | DIAGRAM: IDEF0
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Легенда</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-input))]" />
                  <span className="text-sm">Входы</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-output))]" />
                  <span className="text-sm">Выходы</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-control))]" />
                  <span className="text-sm">Управление</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-mechanism))]" />
                  <span className="text-sm">Механизмы</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-sm font-semibold mb-3">Описание процессов</h3>
              <div className="space-y-4">
                <div>
                  <Badge variant="outline" className="font-mono mb-1">A1</Badge>
                  <p className="text-xs text-muted-foreground">
                    Прием заявки от клиента, сбор необходимых документов и данных о страхуемом объекте
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="font-mono mb-1">A2</Badge>
                  <p className="text-xs text-muted-foreground">
                    Андеррайтинг — анализ рисков, расчет страховой премии, принятие решения о страховании
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="font-mono mb-1">A3</Badge>
                  <p className="text-xs text-muted-foreground">
                    Оформление страхового договора, выдача полиса клиенту, внесение данных в систему учета
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/30">
              <h3 className="text-sm font-semibold mb-3">Входы и выходы</h3>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-medium text-[hsl(var(--idef0-input))] mb-1">Входы:</p>
                  <ul className="space-y-1 text-muted-foreground ml-3">
                    <li>• Заявка клиента на страхование</li>
                    <li>• Документы о страхуемом объекте</li>
                    <li>• Персональные данные</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-[hsl(var(--idef0-output))] mb-1">Выходы:</p>
                  <ul className="space-y-1 text-muted-foreground ml-3">
                    <li>• Страховой полис</li>
                    <li>• Договор страхования</li>
                    <li>• Платежные документы</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
