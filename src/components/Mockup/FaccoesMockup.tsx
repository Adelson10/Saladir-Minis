import imagem1 from '../../assets/Products/SM360/0001.png';
import imagem2 from '../../assets/Products/SM360/0002.png';
import imagem3 from '../../assets/Products/SM360/0003.png';
import imagem4 from '../../assets/Products/SM360/0004.png';
import imagem5 from '../../assets/Products/SM360/0005.png';
import imagem6 from '../../assets/Products/SM360/0006.png';
import imagem7 from '../../assets/Products/SM360/0007.png';
import imagem8 from '../../assets/Products/SM360/0008.png';
import imagem9 from '../../assets/Products/SM360/0009.png';
import imagem10 from '../../assets/Products/SM360/0010.png';
import imagem11 from '../../assets/Products/SM360/0011.png';
import imagem12 from '../../assets/Products/SM360/0012.png';
import imagem13 from '../../assets/Products/SM360/0013.png';
import imagem14 from '../../assets/Products/SM360/0014.png';
import imagem15 from '../../assets/Products/SM360/0015.png';
import imagem16 from '../../assets/Products/SM360/0016.png';
import imagem17 from '../../assets/Products/SM360/0017.png';
import imagem18 from '../../assets/Products/SM360/0018.png';
import imagem19 from '../../assets/Products/SM360/0019.png';
import imagem20 from '../../assets/Products/SM360/0020.png';
import LogoShockHounds from '../../assets/icons/LogoShockHounds';
import ray from '../../assets/icons/ray.svg';

const StromBringers: FactionProps = {
    title: 'Storm Bringers',
    products: [
        {   
            image: [
                imagem1,
                imagem2,
                imagem3,
                imagem4,
                imagem5,
                imagem6,
                imagem7,
                imagem8,
                imagem9,
                imagem10,
                imagem11,
                imagem12,
                imagem13,
                imagem14,
                imagem15,
                imagem16,
                imagem17,
                imagem18,
                imagem19,
                imagem20,
            ],
            AvailableActions: 
            [
              {
                cp: '1CP',
                type: 'STR',
                icon: ray,
                title: 'RELENTLESS ASSAULT',
              }
            ],
            tags: ['ADEPTUS ASTARTE', 'IMPERIUM', 'STORM BRINGER', 'ASSAULT', 'ASSAULT SQUAD'],
            faction: 'Storm Bringers',
            iconCompany: <LogoShockHounds />,
            name: 'Intercessors',
            status: {
                m: '5"',
                t: '5',
                sv: '2+',
                w: '3',
                ld: '2+',
                oc: '1'
            },
            statusPosition: '+4',
            subtitle: 'Assault Intercessors',
            description: 'Os Storm Bringers são um capítulo de Fuzileiros do Espaço Sideral cujas origens e tradições estão profundamente ligadas aos elementos da natureza, em especial às tempestades, das quais derivam seu nome e filosofia de combate. Criados como um dos sucessores dos Selvagens do Espaço Sideral, eles compartilham alguns traços ferozes e guerreiros de seus antecessores, mas com uma abordagem mais estratégica e disciplinada.',
            author: 'Nikkar'
        },
        
    ]
} 

export default StromBringers;