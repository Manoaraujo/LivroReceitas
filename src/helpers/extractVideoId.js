export default function extractVideoId(url) {
   // Padrão de expressão regular para extrair o ID do vídeo
   const regEx =
      /(?:\?v=|\/embed\/|\/v\/|\/vi\/|\/e\/|\/embed\/|\/v=|\/id_)([^#&?]*).*/;

   // Executar a expressão regular na URL do vídeo
   const linkMatch = url.match(regEx);

   // Se houver uma correspondência, o ID do vídeo será capturado no grupo de captura 1
   if (linkMatch && linkMatch[1]) {
      return linkMatch[1];
   } else {
      return false;
   }
}
