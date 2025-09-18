import Card from './components/Card';

export default function App() {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Majestic Mountain Landscape',
      alt: 'Snow-capped mountains against a blue sky',
    },
    {
      id: 2,
      src: `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      caption: `Kluane National Park and Reserve of Canada, Canada`,
      alt: `물 건너편에 그린 마운틴`,
    },
    {
      id: 3,
      src: `https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=913&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      caption: `Cima d'Asta, Scurelle, Italy`,
      alt: `실루엣 사진 의 산 밤 시간`,
    },
    {
      id: 4,
      src: `https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      caption: `Tuscany, Italy`,
      alt: `전경에 나무가있는 구불 구불 한 언덕의 전망`,
    },
    {
      id: 5,
      src: `https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      caption: `Lake Atitlán, Guatemala`,
      alt: `골든 아워 동안 수역 근처의 라벤더 꽃밭 사이의 갈색 나무 선착장`,
    },
    {
      id: 6,
      src: `https://images.unsplash.com/photo-1632169967900-0d2bd9337d00?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      caption: `Siladen Island North Sulawesi, Bunaken, Manado City, North Sulawesi, Indonesia`,
      alt: `그 안에 어떤 사람들이있는 수역`,
    },
    {
      id: 7,
      src: `https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      caption: `Cappadocia, Turky`,
      alt: `hot air balloon contest`,
    },
    {
      id: 8,
      // src: `https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      src: `ps://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      caption: `Skye, United Kingdom`,
      alt: `해질녘 푸른 잔디밭`,
    },
  ];

  return (
    <main className='min-h-screen bg-background'>
      <header className='text-center py-8 sm:py-12 px-4 sm:px-6'>
        <h1 className='mb-3 sm:mb-4 text-xl sm:text-2xl'>Gallery Wall</h1>
        <p className='text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2'>
          An art gallery inspired collection featuring natural landscapes in
          various scales and arrangements
        </p>
      </header>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12'>
        <article
          className='grid gap-2 sm:gap-3 md:gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          style={{
            gridAutoRows: '150px sm:180px md:200px',
          }}
        >
          {/* 이미지 1장 렌더링 */}
          {images.map((item) => (
            <Card key={item.id} image={item} />
          ))}
          {/* 여까지 */}
        </article>
      </section>

      <footer className='text-center py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-muted/30'>
        <p className='text-muted-foreground text-sm sm:text-base'>
          <span className='block sm:inline'>
            Curated Photography Collection
          </span>
          <span className='hidden sm:inline'> • </span>
          <span className='block sm:inline'>Gallery Wall Experience</span>
          <span className='block mt-2 text-xs sm:text-sm'>
            0 images hidden • 0 displayed
          </span>
        </p>
      </footer>
    </main>
  );
}
