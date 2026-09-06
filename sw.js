// Service worker mínimo — só existe para o Chrome permitir "Instalar app".
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {}); // deixa tudo passar direto pra rede
