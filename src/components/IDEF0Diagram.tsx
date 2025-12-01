import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProcessBlock {
  id: string;
  title: string;
  code: string;
  description: string;
  inputs: string[];
  outputs: string[];
  controls: string[];
  mechanisms: string[];
}

const processes: ProcessBlock[] = [
  {
    id: 'A1',
    title: 'Страхование',
    code: 'A1',
    description: 'Оформление страховых полисов, андеррайтинг, оценка рисков',
    inputs: ['Заявка клиента', 'Документы о страхуемом объекте'],
    outputs: ['Страховой полис', 'Договор страхования'],
    controls: ['Тарифы', 'Правила страхования', 'Нормативные акты'],
    mechanisms: ['Андеррайтеры', 'ИС андеррайтинга', 'Оценщики']
  },
  {
    id: 'A2',
    title: 'Урегулирование претензий',
    code: 'A2',
    description: 'Обработка страховых случаев, выплата компенсаций',
    inputs: ['Заявление о страховом случае', 'Документы о происшествии'],
    outputs: ['Акт о страховом случае', 'Выплата компенсации'],
    controls: ['Регламент урегулирования', 'Лимиты выплат', 'Законодательство'],
    mechanisms: ['Аджастеры', 'ИС урегулирования', 'Эксперты']
  },
  {
    id: 'A3',
    title: 'Управление клиентами',
    code: 'A3',
    description: 'CRM, обслуживание клиентов, продление полисов',
    inputs: ['Запросы клиентов', 'Данные о клиентах'],
    outputs: ['Обслуженные запросы', 'Обновленная база клиентов'],
    controls: ['Стандарты обслуживания', 'Политики работы с клиентами'],
    mechanisms: ['Менеджеры', 'CRM-система', 'Колл-центр']
  },
  {
    id: 'A4',
    title: 'Управление агентами',
    code: 'A4',
    description: 'Работа с агентской сетью, комиссии, обучение',
    inputs: ['Заявки агентов', 'Отчеты о продажах'],
    outputs: ['Договоры с агентами', 'Комиссионные выплаты'],
    controls: ['Агентская политика', 'Тарифы комиссий', 'Требования к агентам'],
    mechanisms: ['Супервайзеры', 'ИС управления агентами', 'Бухгалтерия']
  },
  {
    id: 'A5',
    title: 'Отчетность и аналитика',
    code: 'A5',
    description: 'Формирование отчетов, анализ бизнес-показателей',
    inputs: ['Данные о полисах', 'Данные о выплатах', 'Финансовые данные'],
    outputs: ['Отчеты для регулятора', 'Аналитические отчеты', 'Финансовая отчетность'],
    controls: ['Стандарты отчетности', 'Требования ЦБ РФ', 'МСФО'],
    mechanisms: ['Аналитики', 'BI-система', 'Бухгалтерская система']
  },
  {
    id: 'A6',
    title: 'Документация и регламенты',
    code: 'A6',
    description: 'Управление документацией, разработка регламентов',
    inputs: ['Изменения в законодательстве', 'Бизнес-требования'],
    outputs: ['Обновленные регламенты', 'Внутренние инструкции'],
    controls: ['Корпоративные стандарты', 'Система менеджмента качества'],
    mechanisms: ['Юристы', 'СЭД', 'Бизнес-аналитики']
  }
];

const IDEF0Diagram = () => {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  const activeBlock = hoveredBlock || selectedBlock;
  const activeProcess = processes.find(p => p.id === activeBlock);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Icon name="Network" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">IDEF0: Страховая компания</h1>
          </div>
          <p className="text-muted-foreground">
            Функциональная модель верхнего уровня (A0) - Основные процессы страховой деятельности
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card border-2">
              <div className="grid grid-cols-2 gap-6">
                {processes.map((process) => {
                  const isActive = activeBlock === process.id;
                  return (
                    <div
                      key={process.id}
                      className={`relative cursor-pointer transition-all duration-300 ${
                        isActive ? 'scale-105 z-10' : 'hover:scale-102'
                      }`}
                      onMouseEnter={() => setHoveredBlock(process.id)}
                      onMouseLeave={() => setHoveredBlock(null)}
                      onClick={() => setSelectedBlock(selectedBlock === process.id ? null : process.id)}
                    >
                      <div
                        className={`relative border-2 rounded-sm p-6 bg-muted transition-all duration-300 ${
                          isActive ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
                        }`}
                      >
                        <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground w-8 h-8 rounded-sm flex items-center justify-center font-mono text-sm font-semibold">
                          {process.code}
                        </div>
                        
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-4 bg-accent" />
                        
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-px h-4 bg-secondary" />
                        
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-4 h-px bg-primary" />
                        
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-px bg-[hsl(var(--idef0-mechanism))]" />

                        <h3 className="text-lg font-semibold text-center mt-2">{process.title}</h3>
                        <p className="text-xs text-muted-foreground text-center mt-2">{process.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs text-muted-foreground font-mono">
                  NODE: A0 | TITLE: Страховая компания | NUMBER: IDEF0-2025-001
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="Palette" size={20} />
                Легенда IDEF0
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-input))]" />
                  <span className="text-sm">Входы (Input)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-output))]" />
                  <span className="text-sm">Выходы (Output)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-control))]" />
                  <span className="text-sm">Управление (Control)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[hsl(var(--idef0-mechanism))]" />
                  <span className="text-sm">Механизмы (Mechanism)</span>
                </div>
              </div>
            </Card>

            {activeProcess && (
              <Card className="p-6 animate-fade-in">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">{activeProcess.code}</Badge>
                    <h3 className="font-semibold">{activeProcess.title}</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="ArrowRight" size={16} className="text-[hsl(var(--idef0-input))]" />
                        <span className="text-sm font-medium text-[hsl(var(--idef0-input))]">Входы</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {activeProcess.inputs.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="ArrowRight" size={16} className="text-[hsl(var(--idef0-output))]" />
                        <span className="text-sm font-medium text-[hsl(var(--idef0-output))]">Выходы</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {activeProcess.outputs.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="ArrowDown" size={16} className="text-[hsl(var(--idef0-control))]" />
                        <span className="text-sm font-medium text-[hsl(var(--idef0-control))]">Управление</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {activeProcess.controls.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="ArrowUp" size={16} className="text-[hsl(var(--idef0-mechanism))]" />
                        <span className="text-sm font-medium text-[hsl(var(--idef0-mechanism))]">Механизмы</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {activeProcess.mechanisms.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            <Card className="p-6 bg-muted/50">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Icon name="Info" size={16} />
                О нотации IDEF0
              </h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>IDEF0 — методология функционального моделирования сложных систем.</p>
                <p>Каждый блок представляет функцию с четырьмя типами связей:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Вход (слева) — преобразуемые данные</li>
                  <li>• Выход (справа) — результат работы</li>
                  <li>• Управление (сверху) — правила и ограничения</li>
                  <li>• Механизм (снизу) — ресурсы выполнения</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDEF0Diagram;
