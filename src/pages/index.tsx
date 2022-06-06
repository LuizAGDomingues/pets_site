import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'


const Home: NextPage = () => {
  return (
    <div>
      <Titulo titulo='' 
        subtitulo={
          <span>
            Com um pequeno valor mensal, 
            você <br/> pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <Lista 
        pets={[
          {
            id: 1,
            name: 'Bidu',
            history: 'abcdefegegegegegegegeg',
            foto: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'
          },
          {
            id: 2,
            name: 'Scooby',
            history: 'abcdefegegegegegegegeg',
            foto: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg'
          },
          {
            id: 3,
            name: 'Reinaldo',
            history: 'abcdefegegegegegegegeg',
            foto: 'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg'
          },
          {
            id:4,
            name: 'Jamile',
            history: 'abcdefegegegegegegegeg',
            foto: 'https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_3x4.jpg'
          },
        ]}
      />
    </div>
  )
}

export default Home
