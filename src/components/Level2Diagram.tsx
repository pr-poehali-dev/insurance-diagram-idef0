import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Level2Diagram = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">IDEF0: Страховая компания - Уровень 2</h1>
          <p className="text-muted-foreground">
            Декомпозиция процесса оформления страхового полиса (A1)
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="p-8 bg-[#0a0a0a] border-2 border-border relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}
              />

              <div className="relative" style={{ minHeight: '700px' }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <defs>
                    <marker id="arrow-input" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#0EA5E9" />
                    </marker>
                    <marker id="arrow-output" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
                    </marker>
                    <marker id="arrow-control" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#F97316" />
                    </marker>
                    <marker id="arrow-mechanism" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#8B5CF6" />
                    </marker>
                  </defs>

                  <line x1="10%" y1="20%" x2="18%" y2="20%" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrow-input)" />

                  <path d="M 30% 15% L 30% 35% L 35% 35%" stroke="#F97316" strokeWidth="2" fill="none" markerEnd="url(#arrow-control)" />

                  <path d="M 50% 10% L 50% 35%" stroke="#F97316" strokeWidth="2" fill="none" markerEnd="url(#arrow-control)" />

                  <path d="M 75% 10% L 75% 48%" stroke="#F97316" strokeWidth="2" fill="none" markerEnd="url(#arrow-control)" />

                  <line x1="30%" y1="26%" x2="35%" y2="40%" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrow-mechanism)" />

                  <line x1="50%" y1="48%" x2="50%" y2="55%" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrow-mechanism)" />

                  <line x1="75%" y1="61%" x2="75%" y2="68%" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrow-mechanism)" />

                  <path d="M 32% 20% L 35% 20% L 35% 40%" stroke="#d946ef" strokeWidth="2" fill="none" />

                  <path d="M 32% 25% L 33% 25% L 33% 60% L 35% 60% L 35% 53%" stroke="#10B981" strokeWidth="2" fill="none" markerEnd="url(#arrow-output)" />

                  <path d="M 57% 40% L 68% 40% L 68% 53%" stroke="#d946ef" strokeWidth="2" fill="none" markerEnd="url(#arrow-control)" />

                  <line x1="57%" y1="53%" x2="68%" y2="53%" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow-output)" />

                  <line x1="82%" y1="53%" x2="90%" y2="53%" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow-output)" />

                  <path d="M 18% 75% L 50% 75% L 50% 61%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-mechanism)" />

                  <path d="M 50% 75% L 75% 75% L 75% 74%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-mechanism)" />

                  <path d="M 30% 85% L 50% 85% L 50% 61%" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />

                  <path d="M 50% 85% L 75% 85% L 75% 74%" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                </svg>

                <div className="absolute" style={{ left: '25%', top: '20%', width: '120px', zIndex: 10 }}>
                  <div className="bg-[#9b87f5] hover:bg-[#b399ff] transition-all rounded p-4 shadow-lg border-2 border-[#9b87f5] relative">
                    <Badge className="absolute -top-2 -left-2 bg-primary text-primary-foreground font-mono text-xs">A1.1</Badge>
                    <p className="text-xs font-medium text-white text-center leading-tight pt-1">Получить данные клиента</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '43%', top: '40%', width: '120px', zIndex: 10 }}>
                  <div className="bg-[#9b87f5] hover:bg-[#b399ff] transition-all rounded p-4 shadow-lg border-2 border-[#9b87f5] relative">
                    <Badge className="absolute -top-2 -left-2 bg-primary text-primary-foreground font-mono text-xs">A1.2</Badge>
                    <p className="text-xs font-medium text-white text-center leading-tight pt-1">Проверить наличие размера</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '68%', top: '53%', width: '120px', zIndex: 10 }}>
                  <div className="bg-[#9b87f5] hover:bg-[#b399ff] transition-all rounded p-4 shadow-lg border-2 border-[#9b87f5] relative">
                    <Badge className="absolute -top-2 -left-2 bg-primary text-primary-foreground font-mono text-xs">A1.3</Badge>
                    <p className="text-xs font-medium text-white text-center leading-tight pt-1">Зарегистрировать заказ</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '6%', top: '18%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-input))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-input))] whitespace-nowrap">Данные клиента</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '17%', top: '5%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-control))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-control))] whitespace-nowrap text-center leading-tight">
                      Нормативно справочная<br/>документация
                    </p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '33%', top: '29%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-mechanism))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-mechanism))] whitespace-nowrap">Устройство ввода</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '21%', top: '72%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-mechanism))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-mechanism))] whitespace-nowrap">Сотрудник пункта проката</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '45%', top: '62%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-mechanism))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-mechanism))] whitespace-nowrap">База данных</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '73%', top: '75%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-mechanism))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-mechanism))] whitespace-nowrap">ПО</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '46%', top: '82%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-control))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-control))] whitespace-nowrap">ПО</p>
                  </div>
                </div>

                <div className="absolute" style={{ left: '86%', top: '51%', zIndex: 5 }}>
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded border border-[hsl(var(--idef0-output))]">
                    <p className="text-xs font-medium text-[hsl(var(--idef0-output))] whitespace-nowrap text-center leading-tight">
                      Зарегистрированный<br/>заказ
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border relative z-10">
                <div className="text-xs text-muted-foreground font-mono">
                  NODE: A1 | TITLE: Оформление страхового полиса | LEVEL: 2
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
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[#d946ef]" />
                  <span className="text-sm">Внутренние связи</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-sm font-semibold mb-3">Подпроцессы</h3>
              <div className="space-y-4">
                <div>
                  <Badge variant="outline" className="font-mono mb-1">A1.1</Badge>
                  <p className="text-xs text-muted-foreground">
                    Получение и первичная обработка данных клиента через устройство ввода
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="font-mono mb-1">A1.2</Badge>
                  <p className="text-xs text-muted-foreground">
                    Проверка наличия необходимых размеров и доступности услуги в базе данных
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="font-mono mb-1">A1.3</Badge>
                  <p className="text-xs text-muted-foreground">
                    Регистрация заказа в системе с присвоением уникального номера
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/30">
              <h3 className="text-sm font-semibold mb-3">Механизмы выполнения</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p><span className="font-medium text-foreground">Сотрудник:</span> координирует весь процесс оформления</p>
                <p><span className="font-medium text-foreground">База данных:</span> хранит информацию о клиентах и доступности</p>
                <p><span className="font-medium text-foreground">ПО:</span> автоматизирует проверки и регистрацию</p>
                <p><span className="font-medium text-foreground">Устройство ввода:</span> средство ввода данных клиента</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level2Diagram;
