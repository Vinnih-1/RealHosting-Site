import { Collapse } from 'antd'
import type { CollapseProps } from 'antd';

export function FaqCollapse() {
    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Qual é o tempo de ativação do serviço?',
          children: <p>Nosso tempo de ativação dura em torno de 5 Minutos após a compra e validação do serviço escolhido.</p>
        },
        {
          key: '2',
          label: 'Como funciona o sistema de reembolso?',
          children: <p>Nosso tempo de ativação dura em torno de 5 Minutos após a compra e validação do serviço escolhido.</p>
        },
        {
          key: '3',
          label: 'Qual horário de antendimento?',
          children: <p>Nosso tempo de ativação dura em torno de 5 Minutos após a compra e validação do serviço escolhido.</p>
        },
        {
          key: '4',
          label: 'Quais datacenter vocês utilizam?',
          children: <p>Nosso tempo de ativação dura em torno de 5 Minutos após a compra e validação do serviço escolhido.</p>
        }
    ];

    return (
      <div>
        <Collapse items={items} defaultActiveKey={['1']} />
      </div>
    );
}