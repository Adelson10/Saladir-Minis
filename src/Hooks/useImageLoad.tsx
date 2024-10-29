const useImageLoad = (imageUrls: string[] | string) => {  
  // Função para carregar todas as imagens
  function loadImages(imageUrls: string[]) {
    if(Array.isArray(imageUrls)) {
        const imagePromises = imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = () => resolve(img); // resolve com a imagem carregada
              img.onerror = reject; // rejeita a promessa em caso de erro
            });
          });
          return Promise.all(imagePromises);

    } 
  }
  
  // Função para renderizar imagens depois de todas estarem carregadas
  function renderImages(images) {
    const container = document.getElementById('imageContainer'); // Container para imagens
    images.forEach((img) => {
      container.appendChild(img); // Adiciona cada imagem ao container
    });
  }
  
  // Chamando a função para carregar e renderizar as imagens
    loadImages(imageUrls)
    .then((images) => {
      renderImages(images);
      console.log('Todas as imagens foram carregadas e renderizadas!');
    })
    .catch((error) => {
      console.error('Erro ao carregar imagens:', error);
    });
  
  return {

  }
}

export default useImageLoad;