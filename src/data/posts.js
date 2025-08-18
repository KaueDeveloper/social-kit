//Array de postagens

/* ----- Notes ---------
Atualizar depois o link dos avatares
*/


const posts = [
    //Postagens do Lucas Ferreira - @eu_lucas
    {
        id: 1,
        author: {
            id: 1,
            name: 'Lucas Ferreira',
            username: '@eu_lucas',
            avatar: 'http://localhost:8080/avatar/id/1'
        },
        content: 'Hoje, celebrei meu aniversário com minha família. O que tenho a dizer é somente gratidão.',
        hashtags: ['#familia', '#aniversario', '#felicidade'],
        createdAt: '2025-05-16T08:30:00Z',
        likes: 468,
        comments: 43,
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Lucas Ferreira',
            username: '@eu_lucas',
            avatar: 'http://localhost:8080/avatar/id/1'
        },
        content: 'Dediquei essa manhã para ler um livro que gosto muito, muita paz e ensino.',
        hashtags: ['#livro', '#leitura', '#paz'],
        createdAt: '2025-05-18T10:02:00Z',
        likes: 349,
        comments: 35
    },
    {
        id: 3,
        author: {
            id: 1,
            name: 'Lucas Ferreira',
            username: '@eu_lucas',
            avatar: 'http://localhost:8080/avatar/id/1'
        },
        content: 'Adoro ler livros, meu hobie favorito.',
        hashtags: ['#livros'],
        createdAt: '2025-05-20T15:36:00Z',
        likes: 46,
        comments: 13
    },
    {
        id: 4,
        author: {
            id: 1,
            name: 'Lucas Ferreira',
            username: '@eu_lucas',
            avatar: 'http://localhost:8080/avatar/id/1'
        },
        content: 'Estou doando livros, quem tiver interesse, pode me mandar uma mensagem.',
        hashtags: ['#doacao', '#livros', '#solidariedade'],
        createdAt: '2025-05-29T13:17:00Z',
        likes: 316,
        comments: 19
    },
    {
        id: 5,
        author: {
            id: 1,
            name: 'Lucas Ferreira',
            username: '@eu_lucas',
            avatar: 'http://localhost:8080/avatar/id/1'
        },
        content: 'Fui jogar xadrez com os amigos, satisfação em poder tê-los como meus irmãos @italo_santos, @marcos_benicio',
        hashtags: ['#xadrez', '#chess', '#amigos'],
        createdAt: '2025-05-16T08:30:00Z',
        likes: 53,
        comments: 5
    },
    //Postagens do Jeferson Albuquerque - @eu_jef
    {
        id: 6,
        author: {
            id: 2,
            name: 'Jeferson Albuquerque',
            username: '@eu_jef',
            avatar: 'http://localhost:8080/avatar/id/2'
        },
        content: 'Vou tocar uma senata no concerto hoje.',
        hashtags: ['#senata', '#concerto', '#violino'],
        createdAt: '2025-03-14T06:32:00Z',
        likes: 56,
        comments: 6
    },
    {
        id: 7,
        author: {
            id: 2,
            name: 'Jeferson Albuquerque',
            username: '@eu_jef',
            avatar: 'http://localhost:8080/avatar/id/2'
        },
        content: 'Pensando seriamente em trocar de violino.',
        hashtags: ['#violinista'],
        createdAt: '2025-03-19T07:36:00Z',
        likes: 26,
        comments: 2
    },
    {
        id: 8,
        author: {
            id: 2,
            name: 'Jeferson Albuquerque',
            username: '@eu_jef',
            avatar: 'http://localhost:8080/avatar/id/2'
        },
        content: 'Mais tarde vou para o concerto de novo',
        hashtags: ['#violino', '#violinista'],
        createdAt: '2025-03-27T12:15:00Z',
        likes: 16,
        comments: 0
    },
    {
        id: 9,
        author: {
            id: 2,
            name: 'Jeferson Albuquerque',
            username: '@eu_jef',
            avatar: 'http://localhost:8080/avatar/id/2'
        },
        content: 'Um dia, irei para Guatemala tocar violino por lá, meu sonho!',
        hashtags: ['#viajem', '#violino', '#música'],
        createdAt: '2025-04-11T16:34:00Z',
        likes: 36,
        comments: 6
    },
    {
        id: 10,
        author: {
            id: 2,
            name: 'Jeferson Albuquerque',
            username: '@eu_jef',
            avatar: 'http://localhost:8080/avatar/id/2'
        },
        content: 'Não tem coisa melhor do que tocar violino em um final de tarde. A sensação de tocar experience olhando para o sol se pondo é inexplicável',
        hashtags: ['#violino', '#música'],
        createdAt: '2025-04-22T19:26:00Z',
        likes: 31,
        comments: 3
    },
    //Postagens de Ravi Ramesh - @ravi_ramesh
    {
        id: 11,
        author: {
            id: 3,
            name: 'Ravi Ramesh',
            username: '@ravi_ramesh',
            avatar: 'http://localhost:8080/avatar/id/3'
        },
        content: 'रोज़मर्रा की ज़िंदगी की भागदौड़ के कारण आज मैं बहुत थक गया हूँ',
        hashtags: [],
        createdAt: '2025-02-13T06:31:00Z',
        likes: 68,
        comments: 4
    },
    {
        id: 12,
        author: {
            id: 3,
            name: 'Ravi Ramesh',
            username: '@ravi_ramesh',
            avatar: 'http://localhost:8080/avatar/id/3'
        },
        content: 'मैं यहाँ से जाना चाहता हूँ, मैं अब और बर्दाश्त नहीं कर सकता',
        hashtags: [],
        createdAt: '2025-02-15T07:16:00Z',
        likes: 53,
        comments: 6
    },
    {
        id: 13,
        author: {
            id: 3,
            name: 'Ravi Ramesh',
            username: '@ravi_ramesh',
            avatar: 'http://localhost:8080/avatar/id/3'
        },
        content: 'आज मैं ध्यान करने के लिए जल्दी उठा और मुझे अभी से लग रहा है कि दिन बहुत फलदायी होगा। शांत मन किसी भी उपलब्धि की पहली सीढ़ी है। 🧘‍♂️',
        hashtags: [],
        createdAt: '2025-02-17T09:24:00Z',
        likes: 31,
        comments: 2
    },
    {
        id: 14,
        author: {
            id: 3,
            name: 'Ravi Ramesh',
            username: '@ravi_ramesh',
            avatar: 'http://localhost:8080/avatar/id/3'
        },
        content: 'तकनीक हमें दुनिया से जोड़ती है, लेकिन हम खुद से जुड़ना नहीं भूल सकते। संतुलन ही सब कुछ है। 🌍✨',
        hashtags: [],
        createdAt: '2025-02-16T09:45:00Z',
        likes: 71,
        comments: 12
    },
    {
        id: 15,
        author: {
            id: 3,
            name: 'Ravi Ramesh',
            username: '@ravi_ramesh',
            avatar: 'http://localhost:8080/avatar/id/3'
        },
        content: 'सूर्यास्त की सैर दिन का मेरा सबसे पसंदीदा समय है। यही वह समय होता है जब मैं अपने पास जो कुछ है उसके लिए आभारी होती हूँ और कल के लिए तैयारी करती हूँ। 🌅',
        hashtags: [],
        createdAt: '2025-02-17T18:20:00Z',
        likes: 64,
        comments: 8
    },
    //Postagens de Jessica Pereira - @me_jess
    {
        id: 16,
        author: {
            id: 4,
            name: 'Jessica Pereira',
            username: '@me_jess',
            avatar: 'http://localhost:8080/avatar/id/4'
        },
        content: 'Começando a semana com um café forte e uma lista de metas. Que seja produtiva e cheia de boas notícias! ☕✨',
        hashtags: ['#segunda', '#foco', '#produtividade'],
        createdAt: '2025-02-18T08:10:00Z',
        likes: 87,
        comments: 14
    },
    {
        id: 17,
        author: {
            id: 4,
            name: 'Jessica Pereira',
            username: '@me_jess',
            avatar: 'http://localhost:8080/avatar/id/4'
        },
        content: 'Não existe tempo perfeito, existe a coragem de começar. Hoje dei o primeiro passo em um novo projeto! 🚀',
        hashtags: ['#motivação', '#novosdesafios', '#coragem'],
        createdAt: '2025-02-19T10:22:00Z',
        likes: 63,
        comments: 19
    },
    {
        id: 18,
        author: {
            id: 4,
            name: 'Jessica Pereira',
            username: '@me_jess',
            avatar: 'http://localhost:8080/avatar/id/4'
        },
        content: 'Às vezes tudo que precisamos é de uma boa música e alguns minutos sozinha. 🎧💆‍♀️',
        hashtags: ['#autocuidado', '#paz', '#momentomeu'],
        createdAt: '2025-02-20T21:05:00Z',
        likes: 74,
        comments: 9
    },
    {
        id: 19,
        author: {
            id: 4,
            name: 'Jessica Pereira',
            username: '@me_jess',
            avatar: 'http://localhost:8080/avatar/id/4'
        },
        content: 'Hoje me desafiei na cozinha! Receita nova, muitos erros e risadas, mas no fim ficou delicioso. 🍝😅',
        hashtags: ['#cozinha', '#aventuras', '#sabores'],
        createdAt: '2025-02-21T19:40:00Z',
        likes: 96,
        comments: 22
    },
    {
        id: 20,
        author: {
            id: 4,
            name: 'Jessica Pereira',
            username: '@me_jess',
            avatar: 'http://localhost:8080/avatar/id/4'
        },
        content: 'Domingo de sol, livro na mão e coração tranquilo. É assim que recarrego minhas energias. 📚☀️',
        hashtags: ['#domingo', '#leitura', '#pazinterior'],
        createdAt: '2025-02-23T15:00:00Z',
        likes: 134,
        comments: 27
    },
    //Postagens de Juliana Lima - @ju_lima
    {
        id: 21,
        author: {
            id: 5,
            name: 'Juliana Lima',
            username: '@ju_lima',
            avatar: 'http://localhost:8080/avatar/id/5'
        },
        content: 'Nada como uma corrida leve pela manhã para começar o dia cheia de energia. 🏃‍♀️🌅',
        hashtags: ['#corrida', '#saúde', '#energia'],
        createdAt: '2025-02-24T06:30:00Z',
        likes: 62,
        comments: 15
    },
    {
        id: 22,
        author: {
            id: 5,
            name: 'Juliana Lima',
            username: '@ju_lima',
            avatar: 'http://localhost:8080/avatar/id/5'
        },
        content: 'Trabalhando em um novo projeto criativo que está me deixando super animada! Logo compartilho novidades. ✨🎨',
        hashtags: ['#criatividade', '#novoprojeto', '#inspiração'],
        createdAt: '2025-02-25T11:50:00Z',
        likes: 105,
        comments: 18
    },
    {
        id: 23,
        author: {
            id: 5,
            name: 'Juliana Lima',
            username: '@ju_lima',
            avatar: 'http://localhost:8080/avatar/id/5'
        },
        content: 'Não precisamos de muito para ser felizes: amigos verdadeiros, risadas sinceras e momentos simples. 💛',
        hashtags: ['#amizade', '#felicidade', '#simplicidade'],
        createdAt: '2025-02-26T20:15:00Z',
        likes: 37,
        comments: 3
    },
    {
        id: 24,
        author: {
            id: 5,
            name: 'Juliana Lima',
            username: '@ju_lima',
            avatar: 'http://localhost:8080/avatar/id/5'
        },
        content: 'Sexta-feira chegou! Hora de relaxar, colocar uma boa série e esquecer da correria da semana. 🍿📺',
        hashtags: ['#sexta', '#seriemaratonada', '#descanso'],
        createdAt: '2025-02-28T21:00:00Z',
        likes: 48,
        comments: 9
    },
    {
        id: 25,
        author: {
            id: 5,
            name: 'Juliana Lima',
            username: '@ju_lima',
            avatar: 'http://localhost:8080/avatar/id/5'
        },
        content: 'Um café quentinho e um caderno em branco. Ideias fluem melhor assim. ☕📓',
        hashtags: ['#café', '#inspiração', '#momentomeu'],
        createdAt: '2025-03-01T09:10:00Z',
        likes: 77,
        comments: 11
    },
    //Postagens de Stefany Lindsay - @stef_lindsay
    {
        id: 26,
        author: {
            id: 6,
            name: 'Stefany Lindsay',
            username: '@stef_lindsay',
            avatar: 'http://localhost:8080/avatar/id/6'
        },
        content: 'Golden hour is always my favorite time to capture magic through the lens. 🌅📸',
        hashtags: ['#photography', '#goldenhour', '#creative'],
        createdAt: '2025-03-02T18:45:00Z',
        likes: 154,
        comments: 27
    },
    {
        id: 27,
        author: {
            id: 6,
            name: 'Stefany Lindsay',
            username: '@stef_lindsay',
            avatar: 'http://localhost:8080/avatar/id/6'
        },
        content: 'Design is not just what it looks like, it’s how it works. Constantly learning and improving my craft. ✨💻',
        hashtags: ['#design', '#creativity', '#uxui'],
        createdAt: '2025-03-03T14:20:00Z',
        likes: 132,
        comments: 21
    },
    {
        id: 28,
        author: {
            id: 6,
            name: 'Stefany Lindsay',
            username: '@stef_lindsay',
            avatar: 'http://localhost:8080/avatar/id/6'
        },
        content: 'Exploring downtown today with my camera. Every corner tells a different story. 🏙️📷',
        hashtags: ['#urbanphotography', '#storytelling', '#downtown'],
        createdAt: '2025-03-04T17:05:00Z',
        likes: 118,
        comments: 16
    },
    {
        id: 29,
        author: {
            id: 6,
            name: 'Stefany Lindsay',
            username: '@stef_lindsay',
            avatar: 'http://localhost:8080/avatar/id/6'
        },
        content: 'Sometimes the best inspiration comes from nature. Fresh air, colors, textures... pure art. 🍃🎨',
        hashtags: ['#inspiration', '#nature', '#artistlife'],
        createdAt: '2025-03-05T12:40:00Z',
        likes: 167,
        comments: 30
    },
    {
        id: 30,
        author: {
            id: 6,
            name: 'Stefany Lindsay',
            username: '@stef_lindsay',
            avatar: 'http://localhost:8080/avatar/id/6'
        },
        content: 'Editing late at night with coffee by my side. Creativity doesn’t have a schedule. ☕✨',
        hashtags: ['#designerlife', '#nightowl', '#creativity'],
        createdAt: '2025-03-06T01:15:00Z',
        likes: 143,
        comments: 19
    },
    //Postagens de Thiago Silva - @coronel_thiagosilva
    {
        id: 31,
        author: {
            id: 7,
            name: 'Thiago Silva',
            username: '@coronel_thiagosilva',
            avatar: 'http://localhost:8080/avatar/id/7'
        },
        content: 'Disciplina não é apenas seguir regras, é escolher o caminho certo mesmo quando ninguém está olhando. ⚔️🇧🇷',
        hashtags: ['#liderança', '#disciplina', '#honra'],
        createdAt: '2025-03-07T06:00:00Z',
        likes: 211,
        comments: 42
    },
    {
        id: 32,
        author: {
            id: 7,
            name: 'Thiago Silva',
            username: '@coronel_thiagosilva',
            avatar: 'http://localhost:8080/avatar/id/7'
        },
        content: 'Orgulho de ver minha tropa unida, pronta para qualquer missão. A força de um soldado vem da confiança no seu líder. 💂‍♂️',
        hashtags: ['#exército', '#orgulho', '#missão'],
        createdAt: '2025-03-08T08:30:00Z',
        likes: 185,
        comments: 29
    },
    {
        id: 33,
        author: {
            id: 7,
            name: 'Thiago Silva',
            username: '@coronel_thiagosilva',
            avatar: 'http://localhost:8080/avatar/id/7'
        },
        content: 'Na vida militar aprendemos que cada detalhe importa. Treinar duro é o que garante a vitória no momento certo. 🎖️',
        hashtags: ['#treino', '#força', '#estratégia'],
        createdAt: '2025-03-09T05:45:00Z',
        likes: 167,
        comments: 24
    },
    {
        id: 34,
        author: {
            id: 7,
            name: 'Thiago Silva',
            username: '@coronel_thiagosilva',
            avatar: 'http://localhost:8080/avatar/id/7'
        },
        content: 'A farda representa mais que um uniforme: representa sacrifício, lealdade e amor pela pátria. 🇧🇷',
        hashtags: ['#patriotismo', '#honra', '#forçanacional'],
        createdAt: '2025-03-10T10:10:00Z',
        likes: 248,
        comments: 53
    },
    {
        id: 35,
        author: {
            id: 7,
            name: 'Thiago Silva',
            username: '@coronel_thiagosilva',
            avatar: 'http://localhost:8080/avatar/id/7'
        },
        content: 'Por trás do título de coronel, existe um homem comum que valoriza a família, os amigos e cada momento de paz. 🕊️',
        hashtags: ['#família', '#vida', '#equilíbrio'],
        createdAt: '2025-03-11T20:20:00Z',
        likes: 193,
        comments: 37
    },
    //Postagens de Agatha Guilmesh - @aghata
    {
        id: 36,
        author: {
            id: 8,
            name: 'Agatha Guilmesh',
            username: '@aghata',
            avatar: 'http://localhost:8080/avatar/id/8'
        },
        content: 'Just finished recording my new single! Can’t wait for you all to hear it. 🎶✨',
        hashtags: ['#newsingle', '#musiclife', '#studio'],
        createdAt: '2025-03-12T15:30:00Z',
        likes: 10245,
        comments: 532
    },
    {
        id: 37,
        author: {
            id: 8,
            name: 'Agatha Guilmesh',
            username: '@aghata',
            avatar: 'http://localhost:8080/avatar/id/8'
        },
        content: 'Touring across Canada this summer! Any cities you’re hoping I come to? 🍁🎤',
        hashtags: ['#tour', '#Canada', '#live'],
        createdAt: '2025-03-13T11:00:00Z',
        likes: 9823,
        comments: 498
    },
    {
        id: 38,
        author: {
            id: 8,
            name: 'Agatha Guilmesh',
            username: '@aghata',
            avatar: 'http://localhost:8080/avatar/id/8'
        },
        content: 'Nothing beats the feeling of performing live and seeing all your amazing fans singing along. ❤️🎵',
        hashtags: ['#concert', '#fans', '#grateful'],
        createdAt: '2025-03-14T20:15:00Z',
        likes: 11560,
        comments: 623
    },
    {
        id: 39,
        author: {
            id: 8,
            name: 'Agatha Guilmesh',
            username: '@aghata',
            avatar: 'http://localhost:8080/avatar/id/8'
        },
        content: 'Studio nights and coffee—my two essentials for creating new music. ☕🎹',
        hashtags: ['#musicstudio', '#creativity', '#nightwork'],
        createdAt: '2025-03-15T02:45:00Z',
        likes: 8740,
        comments: 412
    },
    {
        id: 40,
        author: {
            id: 8,
            name: 'Agatha Guilmesh',
            username: '@aghata',
            avatar: 'http://localhost:8080/avatar/id/8'
        },
        content: 'Can’t wait to share my upcoming music video with you all! 🎬✨ Stay tuned!',
        hashtags: ['#musicvideo', '#comingsoon', '#excited'],
        createdAt: '2025-03-16T16:10:00Z',
        likes: 12980,
        comments: 708
    },
    //Postagens de Alessandra Melchior - @melchior_ale
    {
        id: 41,
        author: {
            id: 9,
            name: 'Alessandra Melchior',
            username: '@melchior_ale',
            avatar: 'http://localhost:8080/avatar/id/9'
        },
        content: 'Caminhadas matinais são a melhor forma de começar o dia com a mente clara e energia renovada. 🌿☀️',
        hashtags: ['#caminhada', '#mindfulness', '#vidasaudável'],
        createdAt: '2025-03-17T07:30:00Z',
        likes: 145,
        comments: 22
    },
    {
        id: 42,
        author: {
            id: 9,
            name: 'Alessandra Melchior',
            username: '@melchior_ale',
            avatar: 'http://localhost:8080/avatar/id/9'
        },
        content: 'Um chá, um bom livro e uma tarde chuvosa. Combinação perfeita. 🍵📖',
        hashtags: ['#aconchego', '#relax', '#leituratime'],
        createdAt: '2025-03-18T15:45:00Z',
        likes: 132,
        comments: 19
    },
    {
        id: 43,
        author: {
            id: 9,
            name: 'Alessandra Melchior',
            username: '@melchior_ale',
            avatar: 'http://localhost:8080/avatar/id/9'
        },
        content: 'Experimentando novas receitas na cozinha hoje. Cozinhar é uma terapia. 👩‍🍳✨',
        hashtags: ['#cozinha', '#hobby', '#criatividade'],
        createdAt: '2025-03-19T12:20:00Z',
        likes: 158,
        comments: 27
    },
    {
        id: 44,
        author: {
            id: 9,
            name: 'Alessandra Melchior',
            username: '@melchior_ale',
            avatar: 'http://localhost:8080/avatar/id/9'
        },
        content: 'Corridas no fim da tarde ajudam a aliviar o estresse e clarear a mente. Super recomendo! 🏃‍♀️🌆',
        hashtags: ['#fitness', '#corrida', '#bemestar'],
        createdAt: '2025-03-20T18:10:00Z',
        likes: 121,
        comments: 16
    },
    {
        id: 45,
        author: {
            id: 9,
            name: 'Alessandra Melchior',
            username: '@melchior_ale',
            avatar: 'http://localhost:8080/avatar/id/9'
        },
        content: 'Passar tempo de qualidade com a família não tem preço. Valorize cada momento. ❤️👨‍👩‍👧‍👦',
        hashtags: ['#família', '#amor', '#gratidão'],
        createdAt: '2025-03-21T14:30:00Z',
        likes: 178,
        comments: 33
    },
    //Postagens de Emily Garcia - @emily_garcia
    {
        id: 46,
        author: {
            id: 10,
            name: 'Emily Garcia',
            username: '@emily_garcia',
            avatar: 'http://localhost:8080/avatar/id/10'
        },
        content: 'Acordei inspirada hoje e decidi organizar meu espaço de trabalho. Ambiente limpo, mente limpa! 🖋️✨',
        hashtags: ['#organização', '#produtividade', '#inspiração'],
        createdAt: '2025-03-22T08:00:00Z',
        likes: 98,
        comments: 14
    },
    {
        id: 47,
        author: {
            id: 10,
            name: 'Emily Garcia',
            username: '@emily_garcia',
            avatar: 'http://localhost:8080/avatar/id/10'
        },
        content: 'Hoje foi dia de experimentar uma receita vegana nova. Surpreendentemente deliciosa! 🌱🍴',
        hashtags: ['#culinária', '#vegano', '#experimentar'],
        createdAt: '2025-03-23T13:25:00Z',
        likes: 112,
        comments: 19
    },
    {
        id: 48,
        author: {
            id: 10,
            name: 'Emily Garcia',
            username: '@emily_garcia',
            avatar: 'http://localhost:8080/avatar/id/10'
        },
        content: 'Fim de tarde perfeito para fotografar o pôr do sol. Luz dourada é sempre mágica. 🌇📷',
        hashtags: ['#fotografia', '#pordosol', '#natureza'],
        createdAt: '2025-03-24T18:45:00Z',
        likes: 134,
        comments: 23
    },
    {
        id: 49,
        author: {
            id: 10,
            name: 'Emily Garcia',
            username: '@emily_garcia',
            avatar: 'http://localhost:8080/avatar/id/10'
        },
        content: 'Dedicar alguns minutos à meditação mudou completamente minha energia do dia. Recomendo! 🧘‍♀️💫',
        hashtags: ['#meditação', '#bemestar', '#energia'],
        createdAt: '2025-03-25T07:10:00Z',
        likes: 121,
        comments: 17
    },
    {
        id: 50,
        author: {
            id: 10,
            name: 'Emily Garcia',
            username: '@emily_garcia',
            avatar: 'http://localhost:8080/avatar/id/10'
        },
        content: 'Nada como ouvir música boa e se perder nas memórias que ela traz. 🎶❤️',
        hashtags: ['#música', '#nostalgia', '#momentos'],
        createdAt: '2025-03-26T21:00:00Z',
        likes: 145,
        comments: 25
    },
    //Postagens de Nataly Lima - @eu_nataly_lima
    {
        id: 51,
        author: {
            id: 11,
            name: 'Nataly Lima',
            username: '@eu_nataly_lima',
            avatar: 'http://localhost:8080/avatar/id/11'
        },
        content: 'Hoje foi dia de ensaio longo. Cada nota precisa de dedicação e paixão. 🎻✨',
        hashtags: ['#violinista', '#ensaios', '#musica'],
        createdAt: '2025-03-27T10:15:00Z',
        likes: 178,
        comments: 21
    },
    {
        id: 52,
        author: {
            id: 11,
            name: 'Nataly Lima',
            username: '@eu_nataly_lima',
            avatar: 'http://localhost:8080/avatar/id/11'
        },
        content: 'A energia do palco é indescritível! Amo sentir a música vibrar junto com o público. 🎶❤️',
        hashtags: ['#show', '#violin', '#paixão'],
        createdAt: '2025-03-28T20:00:00Z',
        likes: 213,
        comments: 34
    },
    {
        id: 53,
        author: {
            id: 11,
            name: 'Nataly Lima',
            username: '@eu_nataly_lima',
            avatar: 'http://localhost:8080/avatar/id/11'
        },
        content: 'Praticar diariamente faz toda a diferença. Persistência é a chave para a maestria. 🗝️🎻',
        hashtags: ['#prática', '#disciplina', '#musica'],
        createdAt: '2025-03-29T08:30:00Z',
        likes: 165,
        comments: 19
    },
    {
        id: 54,
        author: {
            id: 11,
            name: 'Nataly Lima',
            username: '@eu_nataly_lima',
            avatar: 'http://localhost:8080/avatar/id/11'
        },
        content: 'Momentos de inspiração aparecem nos lugares mais inesperados. Hoje, no parque, veio uma melodia linda. 🍃🎵',
        hashtags: ['#inspiração', '#violinista', '#natureza'],
        createdAt: '2025-03-30T16:20:00Z',
        likes: 142,
        comments: 16
    },
    {
        id: 55,
        author: {
            id: 11,
            name: 'Nataly Lima',
            username: '@eu_nataly_lima',
            avatar: 'http://localhost:8080/avatar/id/11'
        },
        content: 'Nada se compara ao sentimento de compor uma nova música e ouvir cada nota ganhar vida. ✨🎻',
        hashtags: ['#composição', '#música', '#emoção'],
        createdAt: '2025-03-31T19:45:00Z',
        likes: 191,
        comments: 28
    },
    //Postagens de Giulia Bianchi - @giulia
    {
        id: 56,
        author: {
            id: 12,
            name: 'Giulia Bianchi',
            username: '@giulia',
            avatar: 'http://localhost:8080/avatar/id/12'
        },
        content: 'Every smile from my little one brightens my entire day. 💖👶',
        hashtags: ['#motherhood', '#love', '#family'],
        createdAt: '2025-04-01T09:30:00Z',
        likes: 21500,
        comments: 1820
    },
    {
        id: 57,
        author: {
            id: 12,
            name: 'Giulia Bianchi',
            username: '@giulia',
            avatar: 'http://localhost:8080/avatar/id/12'
        },
        content: 'Morning cuddles with my baby are the best therapy. 🌸✨',
        hashtags: ['#momlife', '#babycuddles', '#happiness'],
        createdAt: '2025-04-02T08:15:00Z',
        likes: 19870,
        comments: 1590
    },
    {
        id: 58,
        author: {
            id: 12,
            name: 'Giulia Bianchi',
            username: '@giulia',
            avatar: 'http://localhost:8080/avatar/id/12'
        },
        content: 'First steps today! Feeling so proud and emotional. 👣💞',
        hashtags: ['#firststeps', '#proudmom', '#familymoments'],
        createdAt: '2025-04-03T17:45:00Z',
        likes: 23410,
        comments: 2035
    },
    {
        id: 59,
        author: {
            id: 12,
            name: 'Giulia Bianchi',
            username: '@giulia',
            avatar: 'http://localhost:8080/avatar/id/12'
        },
        content: 'Bedtime stories with my little princess are my favorite part of the day. 📖🌙',
        hashtags: ['#bedtimestory', '#motherhood', '#magicalmoments'],
        createdAt: '2025-04-04T20:00:00Z',
        likes: 18950,
        comments: 1440
    },
    {
        id: 60,
        author: {
            id: 12,
            name: 'Giulia Bianchi',
            username: '@giulia',
            avatar: 'http://localhost:8080/avatar/id/12'
        },
        content: 'Watching her laugh uncontrollably makes every challenge disappear. ❤️😂',
        hashtags: ['#laughter', '#joy', '#familyfirst'],
        createdAt: '2025-04-05T15:10:00Z',
        likes: 22100,
        comments: 1980
    },
    //Postagens de Larissa Melo - @lari_melo
    {
        id: 61,
        author: {
            id: 13,
            name: 'Larissa Melo',
            username: '@lari_melo',
            avatar: 'http://localhost:8080/avatar/id/13'
        },
        content: 'Nada como um ter um bom descanço e poder acordar pronta para um novo dia.',
        hashtags: ['#leitura', '#relax', '#momentosimples'],
        createdAt: '2025-04-06T16:00:00Z',
        likes: 65,
        comments: 8
    },
    {
        id: 62,
        author: {
            id: 13,
            name: 'Larissa Melo',
            username: '@lari_melo',
            avatar: 'http://localhost:8080/avatar/id/13'
        },
        content: 'Hoje decidi caminhar no parque e aproveitar o sol da manhã. ☀️🌳',
        hashtags: ['#caminhada', '#natureza', '#bemestar'],
        createdAt: '2025-04-07T08:30:00Z',
        likes: 72,
        comments: 11
    },
    {
        id: 63,
        author: {
            id: 13,
            name: 'Larissa Melo',
            username: '@lari_melo',
            avatar: 'http://localhost:8080/avatar/id/13'
        },
        content: 'Tarde de filmes e pipoca em casa. Pequenas alegrias fazem toda a diferença. 🎬🍿',
        hashtags: ['#filmes', '#aconchego', '#diversão'],
        createdAt: '2025-04-08T18:15:00Z',
        likes: 58,
        comments: 6
    },
    {
        id: 64,
        author: {
            id: 13,
            name: 'Larissa Melo',
            username: '@lari_melo',
            avatar: 'http://localhost:8080/avatar/id/13'
        },
        content: 'Experimentando uma nova receita hoje! Amo cozinhar e inventar sabores. 👩‍🍳✨',
        hashtags: ['#cozinha', '#hobby', '#experimentar'],
        createdAt: '2025-04-09T12:00:00Z',
        likes: 81,
        comments: 13
    },
    {
        id: 65,
        author: {
            id: 13,
            name: 'Larissa Melo',
            username: '@lari_melo',
            avatar: 'http://localhost:8080/avatar/id/13'
        },
        content: 'Final de semana chegou! Hora de relaxar, ouvir música e aproveitar cada momento. 🎶💛',
        hashtags: ['#finaldesemana', '#relax', '#momentosfelizes'],
        createdAt: '2025-04-10T09:20:00Z',
        likes: 90,
        comments: 15
    },
    //Postagens de Sharow Mustang - @sharow_mustang
    {
        id: 66,
        author: {
            id: 14,
            name: 'Sharow Mustang',
            username: '@sharow_mustang',
            avatar: 'http://localhost:8080/avatar/id/14'
        },
        content: 'Nothing beats a morning run by the lake. Fresh air, clear mind. 🌅🏃‍♀️',
        hashtags: ['#morningrun', '#freshair', '#healthylifestyle'],
        createdAt: '2025-04-11T07:15:00Z',
        likes: 320,
        comments: 42
    },
    {
        id: 67,
        author: {
            id: 14,
            name: 'Sharow Mustang',
            username: '@sharow_mustang',
            avatar: 'http://localhost:8080/avatar/id/14'
        },
        content: 'Trying out a new coffee shop today. The latte art is amazing! ☕🎨',
        hashtags: ['#coffeetime', '#latteart', '#newplaces'],
        createdAt: '2025-04-12T10:30:00Z',
        likes: 287,
        comments: 36
    },
    {
        id: 68,
        author: {
            id: 14,
            name: 'Sharow Mustang',
            username: '@sharow_mustang',
            avatar: 'http://localhost:8080/avatar/id/14'
        },
        content: 'Weekend vibes: cozy blankets, a good movie, and some homemade snacks. 🎬🍿',
        hashtags: ['#weekendvibes', '#cozy', '#relax'],
        createdAt: '2025-04-13T16:45:00Z',
        likes: 312,
        comments: 41
    },
    {
        id: 69,
        author: {
            id: 14,
            name: 'Sharow Mustang',
            username: '@sharow_mustang',
            avatar: 'http://localhost:8080/avatar/id/14'
        },
        content: 'Exploring downtown today. The street art here is incredible! 🎨🏙️',
        hashtags: ['#urbanexploration', '#streetart', '#citylife'],
        createdAt: '2025-04-14T14:20:00Z',
        likes: 298,
        comments: 37
    },
    {
        id: 70,
        author: {
            id: 14,
            name: 'Sharow Mustang',
            username: '@sharow_mustang',
            avatar: 'http://localhost:8080/avatar/id/14'
        },
        content: 'Late night journaling. Reflecting on the little wins and lessons of the day. 🖊️✨',
        hashtags: ['#journaling', '#reflection', '#selfgrowth'],
        createdAt: '2025-04-15T22:10:00Z',
        likes: 275,
        comments: 33
    },
    //Postagens de Hanna Lange - @ich_hanna
    {
        id: 71,
        author: {
            id: 15,
            name: 'Hanna Lange',
            username: '@ich_hanna',
            avatar: 'http://localhost:8080/avatar/id/15'
        },
        content: 'Morgenspaziergang im Park – frische Luft und klare Gedanken. 🌿☀️',
        hashtags: ['#Morgenspaziergang', '#Natur', '#Entspannung'],
        createdAt: '2025-04-16T07:30:00Z',
        likes: 210,
        comments: 25
    },
    {
        id: 72,
        author: {
            id: 15,
            name: 'Hanna Lange',
            username: '@ich_hanna',
            avatar: 'http://localhost:8080/avatar/id/15'
        },
        content: 'Heute neue Rezepte ausprobiert – Kochen macht so viel Freude! 👩‍🍳✨',
        hashtags: ['#Kochen', '#Hobby', '#Genuss'],
        createdAt: '2025-04-17T12:45:00Z',
        likes: 180,
        comments: 20
    },
    {
        id: 73,
        author: {
            id: 15,
            name: 'Hanna Lange',
            username: '@ich_hanna',
            avatar: 'http://localhost:8080/avatar/id/15'
        },
        content: 'Abendkaffee auf dem Balkon und die Sonne genießen. ☕🌇',
        hashtags: ['#Kaffeepause', '#Balkon', '#Abendstimmung'],
        createdAt: '2025-04-18T18:10:00Z',
        likes: 195,
        comments: 22
    },
    {
        id: 74,
        author: {
            id: 15,
            name: 'Hanna Lange',
            username: '@ich_hanna',
            avatar: 'http://localhost:8080/avatar/id/15'
        },
        content: 'Bücherzeit! Nichts ist schöner, als in eine andere Welt abzutauchen. 📖✨',
        hashtags: ['#Lesen', '#Bücher', '#Entspannung'],
        createdAt: '2025-04-19T15:30:00Z',
        likes: 205,
        comments: 27
    },
    {
        id: 75,
        author: {
            id: 15,
            name: 'Hanna Lange',
            username: '@ich_hanna',
            avatar: 'http://localhost:8080/avatar/id/15'
        },
        content: 'Spaziergänge am Wochenende helfen, den Kopf frei zu bekommen. 🏞️💛',
        hashtags: ['#Wochenende', '#Natur', '#Achtsamkeit'],
        createdAt: '2025-04-20T09:20:00Z',
        likes: 220,
        comments: 30
    },
    //Postagens de Alex Couth - @me_alex_couth
    {
        id: 76,
        author: {
            id: 16,
            name: 'Alex Couth',
            username: '@me_alex_couth',
            avatar: 'http://localhost:8080/avatar/id/16'
        },
        content: 'Just finished a crazy rehearsal session with Jess Music. Feeling pumped! 🎸🔥',
        hashtags: ['#bandlife', '#guitar', '#rehearsal'],
        createdAt: '2025-04-21T17:00:00Z',
        likes: 420,
        comments: 58
    },
    {
        id: 77,
        author: {
            id: 16,
            name: 'Alex Couth',
            username: '@me_alex_couth',
            avatar: 'http://localhost:8080/avatar/id/16'
        },
        content: 'Late night guitar solo practice. Can’t get this riff out of my head! 🎶✨',
        hashtags: ['#guitarsolo', '#practice', '#musiclover'],
        createdAt: '2025-04-22T23:15:00Z',
        likes: 385,
        comments: 47
    },
    {
        id: 78,
        author: {
            id: 16,
            name: 'Alex Couth',
            username: '@me_alex_couth',
            avatar: 'http://localhost:8080/avatar/id/16'
        },
        content: 'Touring with Jess Music is the best feeling ever. Fans, you rock! 🤘🎤',
        hashtags: ['#tourlife', '#livemusic', '#fans'],
        createdAt: '2025-04-23T20:40:00Z',
        likes: 510,
        comments: 72
    },
    {
        id: 79,
        author: {
            id: 16,
            name: 'Alex Couth',
            username: '@me_alex_couth',
            avatar: 'http://localhost:8080/avatar/id/16'
        },
        content: 'Writing new songs in the studio. Creativity is flowing tonight. 🎹🎸',
        hashtags: ['#songwriting', '#studio', '#musicianlife'],
        createdAt: '2025-04-24T21:30:00Z',
        likes: 435,
        comments: 63
    },
    {
        id: 80,
        author: {
            id: 16,
            name: 'Alex Couth',
            username: '@me_alex_couth',
            avatar: 'http://localhost:8080/avatar/id/16'
        },
        content: 'Nothing better than connecting with the audience during a live performance. ❤️🎶',
        hashtags: ['#liveperformance', '#guitarist', '#musiclove'],
        createdAt: '2025-04-25T19:10:00Z',
        likes: 490,
        comments: 68
    },
    //Postagens de Otávio Alencar - @otavio
    {
        id: 81,
        author: {
            id: 17,
            name: 'Otávio Alencar',
            username: '@otavio',
            avatar: 'http://localhost:8080/avatar/id/17'
        },
        content: 'O segredo de um bom negócio está na dedicação diária e na atenção aos detalhes. 💼✨',
        hashtags: ['#empreendedorismo', '#CEO', '#negócios'],
        createdAt: '2025-04-26T09:00:00Z',
        likes: 12400,
        comments: 850
    },
    {
        id: 82,
        author: {
            id: 17,
            name: 'Otávio Alencar',
            username: '@otavio',
            avatar: 'http://localhost:8080/avatar/id/17'
        },
        content: 'Participar de debates jurídicos e eventos empresariais é essencial para crescer profissionalmente. ⚖️📈',
        hashtags: ['#advogado', '#networking', '#carreira'],
        createdAt: '2025-04-27T15:20:00Z',
        likes: 11050,
        comments: 720
    },
    {
        id: 83,
        author: {
            id: 17,
            name: 'Otávio Alencar',
            username: '@otavio',
            avatar: 'http://localhost:8080/avatar/id/17'
        },
        content: 'Delegar tarefas é fundamental para liderar uma equipe de forma eficiente. 👥💡',
        hashtags: ['#liderança', '#gestão', '#CEO'],
        createdAt: '2025-04-28T11:10:00Z',
        likes: 9800,
        comments: 610
    },
    {
        id: 84,
        author: {
            id: 17,
            name: 'Otávio Alencar',
            username: '@otavio',
            avatar: 'http://localhost:8080/avatar/id/17'
        },
        content: 'Nada se compara à sensação de fechar um contrato importante e ver o resultado do esforço da equipe. 🤝🏆',
        hashtags: ['#sucesso', '#negócios', '#empreendedorismo'],
        createdAt: '2025-04-29T17:45:00Z',
        likes: 13750,
        comments: 890
    },
    {
        id: 85,
        author: {
            id: 17,
            name: 'Otávio Alencar',
            username: '@otavio',
            avatar: 'http://localhost:8080/avatar/id/17'
        },
        content: 'Equilibrar trabalho e momentos pessoais é a chave para uma vida plena e produtiva. ⚖️💛',
        hashtags: ['#equilíbrio', '#vida', '#produtividade'],
        createdAt: '2025-04-30T20:10:00Z',
        likes: 12300,
        comments: 760
    },
    //Postagens de Camille Lemaire - @lemaire_camille
    {
        id: 86,
        author: {
            id: 18,
            name: 'Camille Lemaire',
            username: '@lemaire_camille',
            avatar: 'http://localhost:8080/avatar/id/18'
        },
        content: 'Spent the afternoon in the lab running experiments. Every little discovery counts! 🔬✨',
        hashtags: ['#biomedicine', '#labwork', '#research'],
        createdAt: '2025-05-01T14:00:00Z',
        likes: 85,
        comments: 9
    },
    {
        id: 87,
        author: {
            id: 18,
            name: 'Camille Lemaire',
            username: '@lemaire_camille',
            avatar: 'http://localhost:8080/avatar/id/18'
        },
        content: 'Reading some interesting papers on cell regeneration today. Science never ceases to amaze me. 📚🔬',
        hashtags: ['#studies', '#biomedicine', '#learning'],
        createdAt: '2025-05-02T10:30:00Z',
        likes: 92,
        comments: 12
    },
    {
        id: 88,
        author: {
            id: 18,
            name: 'Camille Lemaire',
            username: '@lemaire_camille',
            avatar: 'http://localhost:8080/avatar/id/18'
        },
        content: 'Coffee and notes – the perfect combination for a productive study session. ☕📝',
        hashtags: ['#studytime', '#coffee', '#biomedstudent'],
        createdAt: '2025-05-03T09:15:00Z',
        likes: 78,
        comments: 7
    },
    {
        id: 89,
        author: {
            id: 18,
            name: 'Camille Lemaire',
            username: '@lemaire_camille',
            avatar: 'http://localhost:8080/avatar/id/18'
        },
        content: 'Attended a seminar on gene therapy today. The future of medicine is fascinating! 🧬💡',
        hashtags: ['#seminar', '#genetherapy', '#innovation'],
        createdAt: '2025-05-04T16:40:00Z',
        likes: 88,
        comments: 11
    },
    {
        id: 90,
        author: {
            id: 18,
            name: 'Camille Lemaire',
            username: '@lemaire_camille',
            avatar: 'http://localhost:8080/avatar/id/18'
        },
        content: 'Evening walk to clear my mind after a long day in the lab. Nature always helps. 🌳🌅',
        hashtags: ['#eveningwalk', '#relax', '#nature'],
        createdAt: '2025-05-05T19:00:00Z',
        likes: 80,
        comments: 10
    },
    //Postagens de Amanda Collins - @amanda
    {
        id: 91,
        author: {
            id: 19,
            name: 'Amanda Collins',
            username: '@amanda',
            avatar: 'http://localhost:8080/avatar/id/19'
        },
        content: 'Behind the scenes before tonight’s broadcast. Excited to share the latest updates with everyone! 🎥📰',
        hashtags: ['#newsanchor', '#broadcast', '#journalism'],
        createdAt: '2025-05-06T18:00:00Z',
        likes: 62200,
        comments: 4100
    },
    {
        id: 92,
        author: {
            id: 19,
            name: 'Amanda Collins',
            username: '@amanda',
            avatar: 'http://localhost:8080/avatar/id/19'
        },
        content: 'Interviewing local heroes today. Their stories inspire me every time. 🌟🎤',
        hashtags: ['#journalism', '#interview', '#inspiration'],
        createdAt: '2025-05-07T14:30:00Z',
        likes: 58800,
        comments: 3900
    },
    {
        id: 93,
        author: {
            id: 19,
            name: 'Amanda Collins',
            username: '@amanda',
            avatar: 'http://localhost:8080/avatar/id/19'
        },
        content: 'Newsroom mornings are busy, but the teamwork makes it all worthwhile. 📰💪',
        hashtags: ['#teamwork', '#newsroom', '#journalismlife'],
        createdAt: '2025-05-08T09:20:00Z',
        likes: 61000,
        comments: 4020
    },
    {
        id: 94,
        author: {
            id: 19,
            name: 'Amanda Collins',
            username: '@amanda',
            avatar: 'http://localhost:8080/avatar/id/19'
        },
        content: 'Covering stories that matter is my passion. Every voice deserves to be heard. 🗣️❤️',
        hashtags: ['#news', '#passion', '#journalist'],
        createdAt: '2025-05-09T16:45:00Z',
        likes: 53400,
        comments: 4250
    },
    {
        id: 95,
        author: {
            id: 19,
            name: 'Amanda Collins',
            username: '@amanda',
            avatar: 'http://localhost:8080/avatar/id/19'
        },
        content: 'Wrapping up a live segment today. Grateful for the opportunity to inform and connect with viewers. 🎬✨',
        hashtags: ['#livebroadcast', '#newsanchor', '#gratitude'],
        createdAt: '2025-05-10T20:10:00Z',
        likes: 60500,
        comments: 3980
    },
    //Postagens de Leticia Monez - @le_monez
    {
        id: 96,
        author: {
            id: 20,
            name: 'Leticia Monez',
            username: '@le_monez',
            avatar: 'http://localhost:8080/avatar/id/20'
        },
        content: 'Amo começar o dia com uma caminhada tranquila e ouvir música para animar a manhã. 🎧☀️',
        hashtags: ['#manhã', '#caminhada', '#musica'],
        createdAt: '2025-05-11T07:15:00Z',
        likes: 42,
        comments: 5
    },
    {
        id: 97,
        author: {
            id: 20,
            name: 'Leticia Monez',
            username: '@le_monez',
            avatar: 'http://localhost:8080/avatar/id/20'
        },
        content: 'Tarde de café com amigas. Momentos simples que valem muito! ☕💛',
        hashtags: ['#amizade', '#cafedatarde', '#momentos'],
        createdAt: '2025-05-12T15:30:00Z',
        likes: 38,
        comments: 4
    },
    {
        id: 98,
        author: {
            id: 20,
            name: 'Leticia Monez',
            username: '@le_monez',
            avatar: 'http://localhost:8080/avatar/id/20'
        },
        content: 'Explorando a cidade e descobrindo cantinhos novos. 🏙️✨',
        hashtags: ['#exploração', '#cidade', '#aventura'],
        createdAt: '2025-05-13T10:20:00Z',
        likes: 45,
        comments: 6
    },
    {
        id: 99,
        author: {
            id: 20,
            name: 'Leticia Monez',
            username: '@le_monez',
            avatar: 'http://localhost:8080/avatar/id/20'
        },
        content: 'Finalizando um livro incrível hoje! Nada melhor que se perder em uma boa história. 📖❤️',
        hashtags: ['#leitura', '#livros', '#paixão'],
        createdAt: '2025-05-14T18:00:00Z',
        likes: 50,
        comments: 7
    },
    {
        id: 100,
        author: {
            id: 20,
            name: 'Leticia Monez',
            username: '@le_monez',
            avatar: 'http://localhost:8080/avatar/id/20'
        },
        content: 'Fim de semana chegou! Hora de relaxar, ouvir música e aproveitar cada momento. 🎶🌸',
        hashtags: ['#fimdesemana', '#relax', '#momentosfelizes'],
        createdAt: '2025-05-15T09:45:00Z',
        likes: 55,
        comments: 8
    },
    //Postagens de Maria Neiva - @maria20
    {
        id: 101,
        author: {
            id: 21,
            name: 'Maria Neiva',
            username: '@maria20',
            avatar: 'http://localhost:8080/avatar/id/21'
        },
        content: 'Hoje foi dia de cozinhar uma receita nova. Amo experimentar sabores diferentes! 👩‍🍳✨',
        hashtags: ['#cozinha', '#novareceita', '#hobby'],
        createdAt: '2025-05-16T12:00:00Z',
        likes: 47,
        comments: 6
    },
    {
        id: 102,
        author: {
            id: 21,
            name: 'Maria Neiva',
            username: '@maria20',
            avatar: 'http://localhost:8080/avatar/id/21'
        },
        content: 'Uma boa caminhada ao ar livre faz maravilhas para a mente e o corpo. 🌳☀️',
        hashtags: ['#caminhada', '#natureza', '#bemestar'],
        createdAt: '2025-05-17T08:30:00Z',
        likes: 52,
        comments: 7
    },
    {
        id: 103,
        author: {
            id: 21,
            name: 'Maria Neiva',
            username: '@maria20',
            avatar: 'http://localhost:8080/avatar/id/21'
        },
        content: 'Fim de tarde perfeito para ler um bom livro e tomar chá. 🍵📖',
        hashtags: ['#leitura', '#relax', '#momentosimples'],
        createdAt: '2025-05-18T17:45:00Z',
        likes: 49,
        comments: 5
    },
    {
        id: 104,
        author: {
            id: 21,
            name: 'Maria Neiva',
            username: '@maria20',
            avatar: 'http://localhost:8080/avatar/id/21'
        },
        content: 'Assistindo a filmes clássicos hoje. Nada como boas histórias para relaxar. 🎬✨',
        hashtags: ['#filmes', '#clássicos', '#diversão'],
        createdAt: '2025-05-19T20:10:00Z',
        likes: 55,
        comments: 8
    },
    {
        id: 105,
        author: {
            id: 21,
            name: 'Maria Neiva',
            username: '@maria20',
            avatar: 'http://localhost:8080/avatar/id/21'
        },
        content: 'Sábado à noite tranquilo, música suave e boas energias. 🎶💛',
        hashtags: ['#fimdesemana', '#relax', '#boaenergia'],
        createdAt: '2025-05-20T21:00:00Z',
        likes: 60,
        comments: 9
    },
    //Postagens de Виктор Карпов - @Я_Виктор
    {
    id: 106,
    author: {
        id: 22,
        name: 'Виктор Карпов',
        username: '@Я_Виктор',
        avatar: 'http://localhost:8080/avatar/id/22'
    },
    content: 'Утро началось с крепкого кофе и долгой прогулки. Отличный старт дня. ☕🚶‍♂️',
    hashtags: ['#утро', '#кофе', '#прогулка'],
    createdAt: '2025-05-21T07:45:00Z',
    likes: 42,
    comments: 6
    },
    {
        id: 107,
        author: {
            id: 22,
            name: 'Виктор Карпов',
            username: '@Я_Виктор',
            avatar: 'http://localhost:8080/avatar/id/22'
        },
        content: 'Слушаю старые рок-записи, вдохновение приходит само собой. 🎸🔥',
        hashtags: ['#музыка', '#рок', '#вдохновение'],
        createdAt: '2025-05-22T19:30:00Z',
        likes: 167,
        comments: 24
    },
    {
        id: 108,
        author: {
            id: 22,
            name: 'Виктор Карпов',
            username: '@Я_Виктор',
            avatar: 'http://localhost:8080/avatar/id/22'
        },
        content: 'Сегодняшний вечер идеально подходит для чтения любимой книги. 📚✨',
        hashtags: ['#вечер', '#книги', '#спокойствие'],
        createdAt: '2025-05-23T21:15:00Z',
        likes: 39,
        comments: 4
    },
    {
        id: 109,
        author: {
            id: 22,
            name: 'Виктор Карпов',
            username: '@Я_Виктор',
            avatar: 'http://localhost:8080/avatar/id/22'
        },
        content: 'Погода меняется каждый час, но в этом есть своя красота. 🌦️🌈',
        hashtags: ['#погода', '#природа', '#жизнь'],
        createdAt: '2025-05-24T15:20:00Z',
        likes: 51,
        comments: 8
    },
    {
        id: 110,
        author: {
            id: 22,
            name: 'Виктор Карпов',
            username: '@Я_Виктор',
            avatar: 'http://localhost:8080/avatar/id/22'
        },
        content: 'Иногда нужно просто остановиться и послушать тишину. 🌌',
        hashtags: ['#тишина', '#мысли', '#баланс'],
        createdAt: '2025-05-25T23:00:00Z',
        likes: 74,
        comments: 13
    },
    //Postagens de Caroline Smith - @caroline_smith7
    {
        id: 111,
        author: {
            id: 23,
            name: 'Caroline Smith',
            username: '@caroline_smith7',
            avatar: 'http://localhost:8080/avatar/id/23'
        },
        content: 'Aula de microbiologia prática hoje e eu simplesmente AMEI! 🔬✨',
        hashtags: ['#biomedicina', '#microbiologia', '#novadescoberta'],
        createdAt: '2025-05-21T14:10:00Z',
        likes: 82,
        comments: 14
    },
    {
        id: 112,
        author: {
            id: 23,
            name: 'Caroline Smith',
            username: '@caroline_smith7',
            avatar: 'http://localhost:8080/avatar/id/23'
        },
        content: 'Café e livros de anatomia: a dupla perfeita para uma tarde de estudos. ☕📚',
        hashtags: ['#rotinadeestudos', '#biomed', '#anatomia'],
        createdAt: '2025-05-22T16:45:00Z',
        likes: 54,
        comments: 7
    },
    {
        id: 113,
        author: {
            id: 23,
            name: 'Caroline Smith',
            username: '@caroline_smith7',
            avatar: 'http://localhost:8080/avatar/id/23'
        },
        content: 'Nada como ver no microscópio aquilo que só via nos livros. Fascinante demais! 🔍❤️',
        hashtags: ['#microscopia', '#ciência', '#biomedicina'],
        createdAt: '2025-05-23T11:30:00Z',
        likes: 96,
        comments: 18
    },
    {
        id: 114,
        author: {
            id: 23,
            name: 'Caroline Smith',
            username: '@caroline_smith7',
            avatar: 'http://localhost:8080/avatar/id/23'
        },
        content: 'Estudar até tarde não é fácil, mas o sonho de se tornar biomédica vale cada página lida. ✨📖',
        hashtags: ['#dedicação', '#sonhos', '#biomed'],
        createdAt: '2025-05-23T23:50:00Z',
        likes: 71,
        comments: 12
    },
    {
        id: 115,
        author: {
            id: 23,
            name: 'Caroline Smith',
            username: '@caroline_smith7',
            avatar: 'http://localhost:8080/avatar/id/23'
        },
        content: 'Pequenos passos todos os dias levam a grandes conquistas no futuro. 🌟',
        hashtags: ['#motivação', '#futuro', '#biomedicina'],
        createdAt: '2025-05-24T08:20:00Z',
        likes: 64,
        comments: 10
    },
    //Postagens de Jeferson Guimarães - @vc_jeferson
    {
        id: 116,
        author: {
            id: 24,
            name: 'Jeferson Guimarães',
            username: '@vc_jeferson',
            avatar: 'http://localhost:8080/avatar/id/24'
        },
        content: 'Ontem no show em SP… que energia INCRÍVEL! 🔥🎤 Obrigado a cada um que cantou junto com a gente. Vocês fazem tudo valer a pena. ❤️',
        hashtags: ['#Melo', '#show', '#gratidão'],
        createdAt: '2025-05-24T23:30:00Z',
        likes: 1250,
        comments: 180
    },
    {
        id: 117,
        author: {
            id: 24,
            name: 'Jeferson Guimarães',
            username: '@vc_jeferson',
            avatar: 'http://localhost:8080/avatar/id/24'
        },
        content: 'Voltando ao estúdio para gravar umas faixas novas… quem aí já está ansioso pelo próximo álbum? 👀🎶',
        hashtags: ['#Melo', '#estúdio', '#novasmúsicas'],
        createdAt: '2025-05-26T15:00:00Z',
        likes: 980,
        comments: 132
    },
    {
        id: 118,
        author: {
            id: 24,
            name: 'Jeferson Guimarães',
            username: '@vc_jeferson',
            avatar: 'http://localhost:8080/avatar/id/24'
        },
        content: 'A música tem esse poder mágico de conectar pessoas que nunca se viram antes. Hoje recebi mensagens de fãs da Argentina e fiquei emocionado demais. 🌎🎵',
        hashtags: ['#MúsicaÉVida', '#Melo', '#conexão'],
        createdAt: '2025-05-28T20:15:00Z',
        likes: 1120,
        comments: 97
    },
    {
        id: 119,
        author: {
            id: 24,
            name: 'Jeferson Guimarães',
            username: '@vc_jeferson',
            avatar: 'http://localhost:8080/avatar/id/24'
        },
        content: 'Não é só música, é família. Obrigado, Melo, por estarmos juntos nessa jornada há tantos anos. Vocês são meus irmãos. 🙏🎸',
        hashtags: ['#Melo', '#família', '#rocknroll'],
        createdAt: '2025-06-01T18:45:00Z',
        likes: 870,
        comments: 110
    },
    {
        id: 120,
        author: {
            id: 24,
            name: 'Jeferson Guimarães',
            username: '@vc_jeferson',
            avatar: 'http://localhost:8080/avatar/id/24'
        },
        content: 'Domingo é dia de relaxar, mas também de inspiração. Escrevendo algumas letras novas… e posso dizer que vem coisa forte por aí. ✍️🔥',
        hashtags: ['#Melo', '#novasletras', '#inspiração'],
        createdAt: '2025-06-02T14:20:00Z',
        likes: 760,
        comments: 84
    },
    //Postagens de Julia Farias - @ju_farias
    {
        id: 121,
        author: {
            id: 25,
            name: 'Julia Farias',
            username: '@ju_farias',
            avatar: 'http://localhost:8080/avatar/id/25'
        },
        content: 'Hoje decidi começar um novo livro e já estou apaixonada pela história. 📖✨',
        hashtags: ['#leitora', '#amoler', '#novahistoria'],
        createdAt: '2025-05-23T10:15:00Z',
        likes: 18,
        comments: 3
    },
    {
        id: 122,
        author: {
            id: 25,
            name: 'Julia Farias',
            username: '@ju_farias',
            avatar: 'http://localhost:8080/avatar/id/25'
        },
        content: 'Um café quente sempre melhora qualquer manhã. ☕🌸',
        hashtags: ['#bomdia', '#café', '#pequenasalegrias'],
        createdAt: '2025-05-23T11:40:00Z',
        likes: 25,
        comments: 2
    },
    {
        id: 123,
        author: {
            id: 25,
            name: 'Julia Farias',
            username: '@ju_farias',
            avatar: 'http://localhost:8080/avatar/id/25'
        },
        content: 'Amanhã tem prova, torçam por mim! 📚✍️',
        hashtags: ['#prova', '#estudando', '#força'],
        createdAt: '2025-05-23T20:10:00Z',
        likes: 14,
        comments: 5
    },
    {
        id: 124,
        author: {
            id: 25,
            name: 'Julia Farias',
            username: '@ju_farias',
            avatar: 'http://localhost:8080/avatar/id/25'
        },
        content: 'Adoro sair para caminhar no fim da tarde, me ajuda a organizar os pensamentos. 🌆🚶‍♀️',
        hashtags: ['#reflexão', '#fimdetarde', '#bemestar'],
        createdAt: '2025-05-24T18:30:00Z',
        likes: 21,
        comments: 4
    },
    {
        id: 125,
        author: {
            id: 25,
            name: 'Julia Farias',
            username: '@ju_farias',
            avatar: 'http://localhost:8080/avatar/id/25'
        },
        content: 'Fim de semana chegando, já planejando descansar e ver filmes. 🎬💤',
        hashtags: ['#weekend', '#descanso', '#filmes'],
        createdAt: '2025-05-24T22:00:00Z',
        likes: 19,
        comments: 2
    },
    //Postagens de Matheus Ferreira - @matheus_ferreira
    {
        id: 126,
        author: {
            id: 26,
            name: 'Matheus Ferreira',
            username: '@matheus_ferreira',
            avatar: 'http://localhost:8080/avatar/id/26'
        },
        content: 'Depois de semanas, finalmente consegui zerar aquele jogo difícil. Sensação de conquista! 🎮🔥',
        hashtags: ['#games', '#vitória', '#diversão'],
        createdAt: '2025-06-04T19:45:00Z',
        likes: 33,
        comments: 5
    },
    {
        id: 127,
        author: {
            id: 26,
            name: 'Matheus Ferreira',
            username: '@matheus_ferreira',
            avatar: 'http://localhost:8080/avatar/id/26'
        },
        content: 'Nada como um bom jogo de futebol com os amigos no fim de semana ⚽🍻',
        hashtags: ['#futebol', '#amizade', '#resenha'],
        createdAt: '2025-06-06T22:10:00Z',
        likes: 41,
        comments: 6
    },
    {
        id: 128,
        author: {
            id: 26,
            name: 'Matheus Ferreira',
            username: '@matheus_ferreira',
            avatar: 'http://localhost:8080/avatar/id/26'
        },
        content: 'Experimentando algumas linhas de código novas no projeto, quando funciona de primeira é uma alegria! 💻🚀',
        hashtags: ['#programação', '#devlife', '#sucesso'],
        createdAt: '2025-06-08T15:30:00Z',
        likes: 27,
        comments: 3
    },
    {
        id: 129,
        author: {
            id: 26,
            name: 'Matheus Ferreira',
            username: '@matheus_ferreira',
            avatar: 'http://localhost:8080/avatar/id/26'
        },
        content: 'Maratona de séries iniciada! Alguém aí já assistiu a nova temporada? 🍿📺',
        hashtags: ['#séries', '#maratona', '#fimdesemana'],
        createdAt: '2025-06-10T20:20:00Z',
        likes: 36,
        comments: 4
    },
    {
        id: 130,
        author: {
            id: 26,
            name: 'Matheus Ferreira',
            username: '@matheus_ferreira',
            avatar: 'http://localhost:8080/avatar/id/26'
        },
        content: 'Treino concluído! Agora é descansar e preparar para a próxima sessão. 🏋️‍♂️💪',
        hashtags: ['#foco', '#treino', '#disciplina'],
        createdAt: '2025-06-12T07:15:00Z',
        likes: 52,
        comments: 8
    },
    //Postagens de Adriana Matias - @adri_matias
    {
        id: 131,
        author: {
            id: 27,
            name: 'Adriana Matias',
            username: '@adri_matias',
            avatar: 'http://localhost:8080/avatar/id/27'
        },
        content: 'Nada como uma manhã tranquila para organizar os pensamentos e começar bem o dia. 🌞✨',
        hashtags: ['#bomdia', '#trabalho', '#motivação'],
        createdAt: '2025-06-13T08:15:00Z',
        likes: 23,
        comments: 4
    },
    {
        id: 132,
        author: {
            id: 27,
            name: 'Adriana Matias',
            username: '@adri_matias',
            avatar: 'http://localhost:8080/avatar/id/27'
        },
        content: 'Fim de tarde perfeito para uma caminhada no parque e respirar ar puro. 🌿🍃',
        hashtags: ['#natureza', '#bemestar', '#caminhada'],
        createdAt: '2025-06-13T18:45:00Z',
        likes: 31,
        comments: 5
    },
    {
        id: 133,
        author: {
            id: 27,
            name: 'Adriana Matias',
            username: '@adri_matias',
            avatar: 'http://localhost:8080/avatar/id/27'
        },
        content: 'Tentando novas receitas na cozinha hoje. Quem mais adora cozinhar nos finais de semana? 👩‍🍳🍝',
        hashtags: ['#cozinha', '#culinária', '#fimdesemana'],
        createdAt: '2025-06-14T12:30:00Z',
        likes: 27,
        comments: 3
    },
    {
        id: 134,
        author: {
            id: 27,
            name: 'Adriana Matias',
            username: '@adri_matias',
            avatar: 'http://localhost:8080/avatar/id/27'
        },
        content: 'Sexta-feira chegou! Hora de relaxar, ouvir música e recarregar as energias. 🎶💆‍♀️',
        hashtags: ['#sextou', '#relax', '#musica'],
        createdAt: '2025-06-15T19:00:00Z',
        likes: 38,
        comments: 6
    },
    {
        id: 135,
        author: {
            id: 27,
            name: 'Adriana Matias',
            username: '@adri_matias',
            avatar: 'http://localhost:8080/avatar/id/27'
        },
        content: 'Refletindo sobre os pequenos momentos que tornam a vida especial. ✨❤️',
        hashtags: ['#reflexão', '#vida', '#gratidão'],
        createdAt: '2025-06-16T21:20:00Z',
        likes: 29,
        comments: 4
    },
    //Postagens de Júlio Campos - @eu_julio
    {
        id: 136,
        author: {
            id: 28,
            name: 'Júlio Campos',
            username: '@eu_julio',
            avatar: 'http://localhost:8080/avatar/id/28'
        },
        content: 'Treino pesado hoje, mas cada gota de suor vale a pena! 💪⚽',
        hashtags: ['#treino', '#foco', '#futebol'],
        createdAt: '2025-06-17T09:00:00Z',
        likes: 112,
        comments: 14
    },
    {
        id: 137,
        author: {
            id: 28,
            name: 'Júlio Campos',
            username: '@eu_julio',
            avatar: 'http://localhost:8080/avatar/id/28'
        },
        content: 'Dia de jogo! Vamos com tudo, equipe! 🏟️🔥',
        hashtags: ['#gameDay', '#time', '#determinação'],
        createdAt: '2025-06-18T15:30:00Z',
        likes: 220,
        comments: 36
    },
    {
        id: 138,
        author: {
            id: 28,
            name: 'Júlio Campos',
            username: '@eu_julio',
            avatar: 'http://localhost:8080/avatar/id/28'
        },
        content: 'Nada como sentir o apoio da torcida! Vocês são demais! 🙌❤️',
        hashtags: ['#torcida', '#gratidão', '#futebol'],
        createdAt: '2025-06-18T20:45:00Z',
        likes: 315,
        comments: 48
    },
    {
        id: 139,
        author: {
            id: 28,
            name: 'Júlio Campos',
            username: '@eu_julio',
            avatar: 'http://localhost:8080/avatar/id/28'
        },
        content: 'Treino de recuperação concluído. Corpo em dia, mente focada! 🏃‍♂️💨',
        hashtags: ['#recuperação', '#saúde', '#futebol'],
        createdAt: '2025-06-19T10:00:00Z',
        likes: 98,
        comments: 12
    },
    {
        id: 140,
        author: {
            id: 28,
            name: 'Júlio Campos',
            username: '@eu_julio',
            avatar: 'http://localhost:8080/avatar/id/28'
        },
        content: 'Domingo tranquilo para recarregar energias e se preparar para a próxima semana. 🌤️⚽',
        hashtags: ['#descanso', '#preparação', '#futebol'],
        createdAt: '2025-06-21T18:30:00Z',
        likes: 75,
        comments: 9
    },
    //Postagens de Luciano Primo- @luciano_primo7
    {
        id: 141,
        author: {
            id: 29,
            name: 'Luciano Primo',
            username: '@luciano_primo7',
            avatar: 'http://localhost:8080/avatar/id/29'
        },
        content: 'Debugando um código C++ que parecia impossível de resolver… depois de horas, a vitória! 💻🔥',
        hashtags: ['#C++', '#programação', '#debug'],
        createdAt: '2025-06-22T14:30:00Z',
        likes: 45,
        comments: 7
    },
    {
        id: 142,
        author: {
            id: 29,
            name: 'Luciano Primo',
            username: '@luciano_primo7',
            avatar: 'http://localhost:8080/avatar/id/29'
        },
        content: 'Aprendendo a otimizar loops e melhorar a performance dos meus programas. C++ é um desafio constante! ⚡💻',
        hashtags: ['#C++', '#performance', '#devlife'],
        createdAt: '2025-06-23T11:15:00Z',
        likes: 38,
        comments: 5
    },
    {
        id: 143,
        author: {
            id: 29,
            name: 'Luciano Primo',
            username: '@luciano_primo7',
            avatar: 'http://localhost:8080/avatar/id/29'
        },
        content: 'Nada como aquele momento em que o código finalmente compila sem erros. A sensação é inexplicável! 🖥️✨',
        hashtags: ['#programador', '#C++', '#sucesso'],
        createdAt: '2025-06-24T09:50:00Z',
        likes: 52,
        comments: 8
    },
    {
        id: 144,
        author: {
            id: 29,
            name: 'Luciano Primo',
            username: '@luciano_primo7',
            avatar: 'http://localhost:8080/avatar/id/29'
        },
        content: 'Estudando estruturas de dados hoje. A base de um bom programador nunca acaba! 📚💡',
        hashtags: ['#C++', '#estudando', '#devlife'],
        createdAt: '2025-06-25T16:20:00Z',
        likes: 41,
        comments: 6
    },
    {
        id: 145,
        author: {
            id: 29,
            name: 'Luciano Primo',
            username: '@luciano_primo7',
            avatar: 'http://localhost:8080/avatar/id/29'
        },
        content: 'Finalizando o projeto da semana. Pequenos passos todos os dias levam a grandes conquistas! 🚀💻',
        hashtags: ['#programação', '#C++', '#projetos'],
        createdAt: '2025-06-26T19:40:00Z',
        likes: 47,
        comments: 5
    },
    //Postagens de Tadeu Trindade - @tadeu_trindade
    {
        id: 146,
        author: {
            id: 30,
            name: 'Tadeu Trindade',
            username: '@tadeu_trindade',
            avatar: 'http://localhost:8080/avatar/id/30'
        },
        content: 'Aproveitando o domingo para relaxar e colocar a leitura em dia. 📖☕',
        hashtags: ['#leitura', '#domingo', '#relax'],
        createdAt: '2025-06-27T09:30:00Z',
        likes: 28,
        comments: 4
    },
    {
        id: 147,
        author: {
            id: 30,
            name: 'Tadeu Trindade',
            username: '@tadeu_trindade',
            avatar: 'http://localhost:8080/avatar/id/30'
        },
        content: 'Nada como uma boa caminhada ao ar livre para recarregar as energias. 🌳🚶‍♂️',
        hashtags: ['#natureza', '#saúde', '#bemestar'],
        createdAt: '2025-06-28T18:15:00Z',
        likes: 35,
        comments: 5
    },
    {
        id: 148,
        author: {
            id: 30,
            name: 'Tadeu Trindade',
            username: '@tadeu_trindade',
            avatar: 'http://localhost:8080/avatar/id/30'
        },
        content: 'Testando novas receitas na cozinha hoje. Quem mais adora cozinhar nos finais de semana? 👨‍🍳🍝',
        hashtags: ['#cozinha', '#culinária', '#diversão'],
        createdAt: '2025-06-29T12:40:00Z',
        likes: 22,
        comments: 3
    },
    {
        id: 149,
        author: {
            id: 30,
            name: 'Tadeu Trindade',
            username: '@tadeu_trindade',
            avatar: 'http://localhost:8080/avatar/id/30'
        },
        content: 'Sexta-feira chegou! Hora de curtir, relaxar e aproveitar com amigos. 🎉🍻',
        hashtags: ['#sextou', '#amizade', '#fimdesemana'],
        createdAt: '2025-07-01T19:00:00Z',
        likes: 40,
        comments: 6
    },
    {
        id: 150,
        author: {
            id: 30,
            name: 'Tadeu Trindade',
            username: '@tadeu_trindade',
            avatar: 'http://localhost:8080/avatar/id/30'
        },
        content: 'Refletindo sobre a semana e planejando os próximos passos. Cada dia é uma nova oportunidade. ✨📅',
        hashtags: ['#reflexão', '#planejamento', '#vida'],
        createdAt: '2025-07-02T21:10:00Z',
        likes: 31,
        comments: 4
    },
    //Postagens de Santiago Gárcia - @sant_01
    {
        id: 151,
        author: {
            id: 31,
            name: 'Santiago Gárcia',
            username: '@sant_01',
            avatar: 'http://localhost:8080/avatar/id/31'
        },
        content: 'Disfrutando de un buen café en la mañana ☕🌞',
        hashtags: ['#café', '#mañana', '#relax'],
        createdAt: '2025-07-03T08:15:00Z',
        likes: 25,
        comments: 3
    },
    {
        id: 152,
        author: {
            id: 31,
            name: 'Santiago Gárcia',
            username: '@sant_01',
            avatar: 'http://localhost:8080/avatar/id/31'
        },
        content: 'Fin de semana perfecto para una caminata por el parque y disfrutar la naturaleza 🌿🚶‍♂️',
        hashtags: ['#naturaleza', '#parque', '#bienestar'],
        createdAt: '2025-07-04T17:30:00Z',
        likes: 32,
        comments: 5
    },
    {
        id: 153,
        author: {
            id: 31,
            name: 'Santiago Gárcia',
            username: '@sant_01',
            avatar: 'http://localhost:8080/avatar/id/31'
        },
        content: 'Probando nuevas recetas mexicanas en la cocina. ¡Delicioso! 🌮👨‍🍳',
        hashtags: ['#cocina', '#mexicano', '#recetas'],
        createdAt: '2025-07-05T12:20:00Z',
        likes: 29,
        comments: 4
    },
    {
        id: 154,
        author: {
            id: 31,
            name: 'Santiago Gárcia',
            username: '@sant_01',
            avatar: 'http://localhost:8080/avatar/id/31'
        },
        content: 'Disfrutando del fútbol con amigos y buena compañía ⚽🍻',
        hashtags: ['#fútbol', '#amistad', '#diversión'],
        createdAt: '2025-07-06T20:10:00Z',
        likes: 40,
        comments: 7
    },
    {
        id: 155,
        author: {
            id: 31,
            name: 'Santiago Gárcia',
            username: '@sant_01',
            avatar: 'http://localhost:8080/avatar/id/31'
        },
        content: 'Reflexionando sobre la semana y preparando metas para la próxima ✨📅',
        hashtags: ['#reflexión', '#metas', '#vida'],
        createdAt: '2025-07-07T21:45:00Z',
        likes: 33,
        comments: 5
    },
    //Postagens de Jasper Walter - @jas_walter
    {
        id: 156,
        author: {
            id: 32,
            name: 'Jasper Walter',
            username: '@jas_walter',
            avatar: 'http://localhost:8080/avatar/id/32'
        },
        content: 'Experimenting with new beats for my next set. Music is life! 🎧🔥',
        hashtags: ['#DJLife', '#music', '#beats'],
        createdAt: '2025-07-08T14:20:00Z',
        likes: 210,
        comments: 28
    },
    {
        id: 157,
        author: {
            id: 32,
            name: 'Jasper Walter',
            username: '@jas_walter',
            avatar: 'http://localhost:8080/avatar/id/32'
        },
        content: 'Composing new tracks and exploring different sounds. Creativity at full speed! 🎹✨',
        hashtags: ['#composer', '#musicproduction', '#creative'],
        createdAt: '2025-07-09T11:45:00Z',
        likes: 185,
        comments: 22
    },
    {
        id: 158,
        author: {
            id: 32,
            name: 'Jasper Walter',
            username: '@jas_walter',
            avatar: 'http://localhost:8080/avatar/id/32'
        },
        content: 'Night DJ set completed! The energy on the dance floor is incredible. 🙌🎶',
        hashtags: ['#DJSet', '#nightlife', '#musiclover'],
        createdAt: '2025-07-10T02:15:00Z',
        likes: 240,
        comments: 31
    },
    {
        id: 159,
        author: {
            id: 32,
            name: 'Jasper Walter',
            username: '@jas_walter',
            avatar: 'http://localhost:8080/avatar/id/32'
        },
        content: 'Working on a new collab with local artists. Music brings people together! 🎼🤝',
        hashtags: ['#collab', '#musiccommunity', '#creative'],
        createdAt: '2025-07-11T16:50:00Z',
        likes: 198,
        comments: 26
    },
    {
        id: 160,
        author: {
            id: 32,
            name: 'Jasper Walter',
            username: '@jas_walter',
            avatar: 'http://localhost:8080/avatar/id/32'
        },
        content: 'Finishing the mix of a new track. Can’t wait to share it! 🎛️🎶',
        hashtags: ['#mixing', '#musicproduction', '#DJLife'],
        createdAt: '2025-07-12T19:30:00Z',
        likes: 222,
        comments: 29
    },
    //Postagens de Kauê Matos = @eu_kaue
    {
        id: 161,
        author: {
            id: 33,
            name: 'Kauê Matos',
            username: '@eu_kaue',
            avatar: 'http://localhost:8080/avatar/id/33'
        },
        content: 'Capturando a beleza nos momentos do dia a dia. A fotografia é meu jeito de enxergar o mundo. 📸✨',
        hashtags: ['#fotografia', '#arte', '#inspiração'],
        createdAt: '2025-07-13T10:15:00Z',
        likes: 95,
        comments: 12
    },
    {
        id: 162,
        author: {
            id: 33,
            name: 'Kauê Matos',
            username: '@eu_kaue',
            avatar: 'http://localhost:8080/avatar/id/33'
        },
        content: 'Experimentando luzes e sombras hoje. Cada clique conta uma história. 🌅📷',
        hashtags: ['#fotografia', '#criativo', '#arte'],
        createdAt: '2025-07-14T14:30:00Z',
        likes: 87,
        comments: 10
    },
    {
        id: 163,
        author: {
            id: 33,
            name: 'Kauê Matos',
            username: '@eu_kaue',
            avatar: 'http://localhost:8080/avatar/id/33'
        },
        content: 'Explorando paisagens urbanas e capturando os detalhes escondidos. 🏙️📸',
        hashtags: ['#urbano', '#fotografia', '#arte'],
        createdAt: '2025-07-15T16:50:00Z',
        likes: 78,
        comments: 8
    },
    {
        id: 164,
        author: {
            id: 33,
            name: 'Kauê Matos',
            username: '@eu_kaue',
            avatar: 'http://localhost:8080/avatar/id/33'
        },
        content: 'Inspirado pelas cores e texturas. A arte está em todo lugar, basta observar. 🎨👀',
        hashtags: ['#arte', '#inspiração', '#criatividade'],
        createdAt: '2025-07-16T11:20:00Z',
        likes: 102,
        comments: 14
    },
    {
        id: 165,
        author: {
            id: 33,
            name: 'Kauê Matos',
            username: '@eu_kaue',
            avatar: 'http://localhost:8080/avatar/id/33'
        },
        content: 'Um novo projeto fotográfico começa hoje. Ansioso para ver onde essa jornada criativa vai me levar! 📷🚀',
        hashtags: ['#projetofotográfico', '#criatividade', '#fotografia'],
        createdAt: '2025-07-17T09:45:00Z',
        likes: 88,
        comments: 11
    },
    //Postagens de Otávio Lucas - @otavio0
    {
        id: 166,
        author: {
            id: 34,
            name: 'Otávio Lucas',
            username: '@otavio0',
            avatar: 'http://localhost:8080/avatar/id/34'
        },
        content: 'Mais um dia intenso no restaurante, mas adoro ver os clientes felizes! 🍽️😊',
        hashtags: ['#trabalho', '#garçom', '#satisfação'],
        createdAt: '2025-07-18T12:00:00Z',
        likes: 22,
        comments: 3
    },
    {
        id: 167,
        author: {
            id: 34,
            name: 'Otávio Lucas',
            username: '@otavio0',
            avatar: 'http://localhost:8080/avatar/id/34'
        },
        content: 'Aquele momento de calmaria entre os turnos. Hora de recarregar as energias. ☕✨',
        hashtags: ['#descanso', '#trabalho', '#vida'],
        createdAt: '2025-07-18T16:30:00Z',
        likes: 19,
        comments: 2
    },
    {
        id: 168,
        author: {
            id: 34,
            name: 'Otávio Lucas',
            username: '@otavio0',
            avatar: 'http://localhost:8080/avatar/id/34'
        },
        content: 'Sexta-feira movimentada no restaurante! Nada como ver a equipe unida e eficiente. 👏🍷',
        hashtags: ['#sextou', '#equipe', '#trabalho'],
        createdAt: '2025-07-19T20:00:00Z',
        likes: 27,
        comments: 4
    },
    {
        id: 169,
        author: {
            id: 34,
            name: 'Otávio Lucas',
            username: '@otavio0',
            avatar: 'http://localhost:8080/avatar/id/34'
        },
        content: 'Aprendendo novas técnicas de atendimento para sempre melhorar a experiência dos clientes. 📝😊',
        hashtags: ['#aprendizado', '#clientes', '#garçom'],
        createdAt: '2025-07-20T11:15:00Z',
        likes: 21,
        comments: 3
    },
    {
        id: 170,
        author: {
            id: 34,
            name: 'Otávio Lucas',
            username: '@otavio0',
            avatar: 'http://localhost:8080/avatar/id/34'
        },
        content: 'Domingo tranquilo, refletindo sobre a semana e planejando novas metas. 🌤️💪',
        hashtags: ['#reflexão', '#planejamento', '#vida'],
        createdAt: '2025-07-21T09:30:00Z',
        likes: 18,
        comments: 2
    },
    //Postagens de Sandra Dantas - @sandra_dantas
    {
        id: 171,
        author: {
            id: 35,
            name: 'Sandra Dantas',
            username: '@sandra_dantas',
            avatar: 'http://localhost:8080/avatar/id/35'
        },
        content: 'Reunião produtiva com a equipe hoje! Adoro ver os resultados do nosso trabalho. 👗📊',
        hashtags: ['#moda', '#gestão', '#trabalho'],
        createdAt: '2025-07-22T10:00:00Z',
        likes: 34,
        comments: 5
    },
    {
        id: 172,
        author: {
            id: 35,
            name: 'Sandra Dantas',
            username: '@sandra_dantas',
            avatar: 'http://localhost:8080/avatar/id/35'
        },
        content: 'Supervisionando a nova coleção e garantindo que tudo esteja impecável! ✨👜',
        hashtags: ['#modafeminina', '#equipe', '#inspiração'],
        createdAt: '2025-07-23T14:20:00Z',
        likes: 40,
        comments: 6
    },
    {
        id: 173,
        author: {
            id: 35,
            name: 'Sandra Dantas',
            username: '@sandra_dantas',
            avatar: 'http://localhost:8080/avatar/id/35'
        },
        content: 'Sexta-feira de planejamento estratégico para a loja. O sucesso vem com organização! 📋💼',
        hashtags: ['#moda', '#planejamento', '#trabalho'],
        createdAt: '2025-07-24T09:45:00Z',
        likes: 28,
        comments: 4
    },
    {
        id: 174,
        author: {
            id: 35,
            name: 'Sandra Dantas',
            username: '@sandra_dantas',
            avatar: 'http://localhost:8080/avatar/id/35'
        },
        content: 'Inspirando a equipe com novas ideias e tendências da moda. 👠✨',
        hashtags: ['#moda', '#inspiração', '#equipe'],
        createdAt: '2025-07-25T11:30:00Z',
        likes: 37,
        comments: 5
    },
    {
        id: 175,
        author: {
            id: 35,
            name: 'Sandra Dantas',
            username: '@sandra_dantas',
            avatar: 'http://localhost:8080/avatar/id/35'
        },
        content: 'Fim de semana chegando! Hora de recarregar as energias e voltar com tudo na próxima semana. 🌤️💪',
        hashtags: ['#fimdesemana', '#motivação', '#trabalho'],
        createdAt: '2025-07-26T18:00:00Z',
        likes: 33,
        comments: 4
    },
    //Postagens de Pedro Machado - @pedro8
    {
        id: 176,
        author: {
            id: 36,
            name: 'Pedro Machado',
            username: '@pedro8',
            avatar: 'http://localhost:8080/avatar/id/36'
        },
        content: 'Aproveitando a manhã para caminhar e tomar um café fresco. ☕🌤️',
        hashtags: ['#manhã', '#café', '#bemestar'],
        createdAt: '2025-07-27T08:30:00Z',
        likes: 21,
        comments: 2
    },
    {
        id: 177,
        author: {
            id: 36,
            name: 'Pedro Machado',
            username: '@pedro8',
            avatar: 'http://localhost:8080/avatar/id/36'
        },
        content: 'Sexta-feira animada com os amigos! Hora de relaxar e se divertir. 🎉🍻',
        hashtags: ['#sextou', '#amizade', '#diversão'],
        createdAt: '2025-07-28T19:00:00Z',
        likes: 32,
        comments: 4
    },
    {
        id: 178,
        author: {
            id: 36,
            name: 'Pedro Machado',
            username: '@pedro8',
            avatar: 'http://localhost:8080/avatar/id/36'
        },
        content: 'Passando um tempo na natureza para recarregar as energias. 🌳🌞',
        hashtags: ['#natureza', '#relax', '#vida'],
        createdAt: '2025-07-29T16:20:00Z',
        likes: 25,
        comments: 3
    },
    {
        id: 179,
        author: {
            id: 36,
            name: 'Pedro Machado',
            username: '@pedro8',
            avatar: 'http://localhost:8080/avatar/id/36'
        },
        content: 'Testando uma nova receita hoje! Cozinhar é sempre uma aventura. 👨‍🍳🍝',
        hashtags: ['#cozinha', '#culinária', '#diversão'],
        createdAt: '2025-07-30T12:10:00Z',
        likes: 27,
        comments: 2
    },
    {
        id: 180,
        author: {
            id: 36,
            name: 'Pedro Machado',
            username: '@pedro8',
            avatar: 'http://localhost:8080/avatar/id/36'
        },
        content: 'Planejando a semana e definindo novas metas. Cada dia é uma nova oportunidade! ✨📅',
        hashtags: ['#planejamento', '#motivação', '#vida'],
        createdAt: '2025-07-31T09:40:00Z',
        likes: 23,
        comments: 3
    },
    //Postagens de Carlos Abraão - @eu_carlinhos
    {
        id: 181,
        author: {
            id: 37,
            name: 'Carlos Abraão',
            username: '@eu_carlinhos',
            avatar: 'http://localhost:8080/avatar/id/37'
        },
        content: 'Descobri um café novo na cidade. Aroma incrível e ambiente acolhedor! ☕🏙️',
        hashtags: ['#cafénovo', '#descobertas', '#cidade'],
        createdAt: '2025-08-01T09:00:00Z',
        likes: 24,
        comments: 3
    },
    {
        id: 182,
        author: {
            id: 37,
            name: 'Carlos Abraão',
            username: '@eu_carlinhos',
            avatar: 'http://localhost:8080/avatar/id/37'
        },
        content: 'Passeio de bicicleta ao entardecer. Nada como sentir o vento no rosto. 🚴‍♂️🌇',
        hashtags: ['#bike', '#aventura', '#paz'],
        createdAt: '2025-08-02T18:15:00Z',
        likes: 28,
        comments: 4
    },
    {
        id: 183,
        author: {
            id: 37,
            name: 'Carlos Abraão',
            username: '@eu_carlinhos',
            avatar: 'http://localhost:8080/avatar/id/37'
        },
        content: 'Aprendendo a tocar violão sozinho. Cada acorde é uma conquista! 🎸✨',
        hashtags: ['#violão', '#aprendizado', '#musica'],
        createdAt: '2025-08-03T14:40:00Z',
        likes: 32,
        comments: 5
    },
    {
        id: 184,
        author: {
            id: 37,
            name: 'Carlos Abraão',
            username: '@eu_carlinhos',
            avatar: 'http://localhost:8080/avatar/id/37'
        },
        content: 'Fim de tarde na praia refletindo sobre a vida. Simples momentos são os melhores. 🌊🌅',
        hashtags: ['#praia', '#reflexão', '#vida'],
        createdAt: '2025-08-04T17:50:00Z',
        likes: 30,
        comments: 4
    },
    {
        id: 185,
        author: {
            id: 37,
            name: 'Carlos Abraão',
            username: '@eu_carlinhos',
            avatar: 'http://localhost:8080/avatar/id/37'
        },
        content: 'Descobrindo novos restaurantes na cidade e experimentando pratos incríveis! 🍲🍴',
        hashtags: ['#gastronomia', '#descobertas', '#cidade'],
        createdAt: '2025-08-05T12:25:00Z',
        likes: 27,
        comments: 3
    },
    //Postagens de Pedro Loss - @pedro_loss
    {
        id: 186,
        author: {
            id: 38,
            name: 'Pedro Loss',
            username: '@pedro_loss',
            avatar: 'http://localhost:8080/avatar/id/38'
        },
        content: 'Começando a semana com energia e foco total! 💪✨',
        hashtags: ['#motivação', '#energia', '#foco'],
        createdAt: '2025-08-06T08:00:00Z',
        likes: 25,
        comments: 4
    },
    {
        id: 187,
        author: {
            id: 38,
            name: 'Pedro Loss',
            username: '@pedro_loss',
            avatar: 'http://localhost:8080/avatar/id/38'
        },
        content: 'Descobrindo novas trilhas para corrida. A natureza sempre inspira! 🏞️🏃‍♂️',
        hashtags: ['#corrida', '#natureza', '#inspiração'],
        createdAt: '2025-08-07T07:30:00Z',
        likes: 30,
        comments: 5
    },
    {
        id: 188,
        author: {
            id: 38,
            name: 'Pedro Loss',
            username: '@pedro_loss',
            avatar: 'http://localhost:8080/avatar/id/38'
        },
        content: 'Tarde de leitura e aprendizado. Conhecimento nunca é demais! 📚✨',
        hashtags: ['#leitura', '#aprendizado', '#conhecimento'],
        createdAt: '2025-08-08T15:20:00Z',
        likes: 27,
        comments: 3
    },
    {
        id: 189,
        author: {
            id: 38,
            name: 'Pedro Loss',
            username: '@pedro_loss',
            avatar: 'http://localhost:8080/avatar/id/38'
        },
        content: 'Experimentando uma nova receita no jantar. Cozinhar é um prazer! 🍳🍝',
        hashtags: ['#culinária', '#cozinha', '#prazer'],
        createdAt: '2025-08-09T19:00:00Z',
        likes: 23,
        comments: 2
    },
    {
        id: 190,
        author: {
            id: 38,
            name: 'Pedro Loss',
            username: '@pedro_loss',
            avatar: 'http://localhost:8080/avatar/id/38'
        },
        content: 'Noite tranquila para refletir sobre a semana e planejar novos objetivos. 🌙📝',
        hashtags: ['#reflexão', '#planejamento', '#vida'],
        createdAt: '2025-08-10T21:30:00Z',
        likes: 26,
        comments: 3
    },
    //Postagens de Fabíola Martins - @fa_martins0
    {
        id: 191,
        author: {
            id: 39,
            name: 'Fabíola Martins',
            username: '@fa_martins0',
            avatar: 'http://localhost:8080/avatar/id/39'
        },
        content: 'Iniciando o dia com uma boa caminhada pelo bairro. Saúde em primeiro lugar! 🚶‍♀️🌞',
        hashtags: ['#saúde', '#caminhada', '#manhã'],
        createdAt: '2025-08-11T07:00:00Z',
        likes: 19,
        comments: 2
    },
    {
        id: 192,
        author: {
            id: 39,
            name: 'Fabíola Martins',
            username: '@fa_martins0',
            avatar: 'http://localhost:8080/avatar/id/39'
        },
        content: 'Hora de colocar a leitura em dia. Nada como aprender algo novo todos os dias! 📖✨',
        hashtags: ['#leitura', '#aprendizado', '#conhecimento'],
        createdAt: '2025-08-11T15:30:00Z',
        likes: 22,
        comments: 3
    },
    {
        id: 193,
        author: {
            id: 39,
            name: 'Fabíola Martins',
            username: '@fa_martins0',
            avatar: 'http://localhost:8080/avatar/id/39'
        },
        content: 'Final de semana perfeito para um café com os amigos e boas conversas. ☕👥',
        hashtags: ['#amizade', '#café', '#fimdesemana'],
        createdAt: '2025-08-12T10:45:00Z',
        likes: 24,
        comments: 4
    },
    {
        id: 194,
        author: {
            id: 39,
            name: 'Fabíola Martins',
            username: '@fa_martins0',
            avatar: 'http://localhost:8080/avatar/id/39'
        },
        content: 'Explorando novos sabores na cozinha hoje. Amo testar receitas diferentes! 🍳🥗',
        hashtags: ['#culinária', '#cozinha', '#experimentar'],
        createdAt: '2025-08-12T18:20:00Z',
        likes: 21,
        comments: 3
    },
    {
        id: 195,
        author: {
            id: 39,
            name: 'Fabíola Martins',
            username: '@fa_martins0',
            avatar: 'http://localhost:8080/avatar/id/39'
        },
        content: 'Noite tranquila para refletir e planejar a semana que vem. Organização é tudo! 📝🌙',
        hashtags: ['#planejamento', '#reflexão', '#vida'],
        createdAt: '2025-08-13T21:00:00Z',
        likes: 20,
        comments: 2
    },
    //Postagens de Maria de Fátima Cardoso - @maria_cardoso
    {
        id: 196,
        author: {
            id: 40,
            name: 'Maria de Fátima Cardoso',
            username: '@maria_cardoso',
            avatar: 'http://localhost:8080/avatar/id/40'
        },
        content: 'Manhã ensolarada perfeita para organizar a casa e começar o dia com energia! ☀️🏡',
        hashtags: ['#manhã', '#energia', '#organização'],
        createdAt: '2025-08-14T08:00:00Z',
        likes: 21,
        comments: 3
    },
    {
        id: 197,
        author: {
            id: 40,
            name: 'Maria de Fátima Cardoso',
            username: '@maria_cardoso',
            avatar: 'http://localhost:8080/avatar/id/40'
        },
        content: 'Tarde de chá com amigas, boas conversas e risadas garantidas. 🍵💛',
        hashtags: ['#amizade', '#chá', '#diversão'],
        createdAt: '2025-08-14T15:30:00Z',
        likes: 27,
        comments: 4
    },
    {
        id: 198,
        author: {
            id: 40,
            name: 'Maria de Fátima Cardoso',
            username: '@maria_cardoso',
            avatar: 'http://localhost:8080/avatar/id/40'
        },
        content: 'Adoro tardes de leitura no jardim. Paz e inspiração em cada página. 📖🌸',
        hashtags: ['#leitura', '#inspiração', '#jardim'],
        createdAt: '2025-08-15T16:00:00Z',
        likes: 23,
        comments: 3
    },
    {
        id: 199,
        author: {
            id: 40,
            name: 'Maria de Fátima Cardoso',
            username: '@maria_cardoso',
            avatar: 'http://localhost:8080/avatar/id/40'
        },
        content: 'Preparando um jantar especial para a família. Momentos simples são os melhores! 🍲❤️',
        hashtags: ['#família', '#culinária', '#momentos'],
        createdAt: '2025-08-15T19:45:00Z',
        likes: 29,
        comments: 5
    },
    {
        id: 200,
        author: {
            id: 40,
            name: 'Maria de Fátima Cardoso',
            username: '@maria_cardoso',
            avatar: 'http://localhost:8080/avatar/id/40'
        },
        content: 'Final de domingo refletindo sobre a semana e traçando novos objetivos. 🌙📝',
        hashtags: ['#reflexão', '#planejamento', '#vida'],
        createdAt: '2025-08-16T20:30:00Z',
        likes: 26,
        comments: 4
    },
    //Postagens de Letícia Ferraz - @leh7
    {
        id: 201,
        author: {
            id: 41,
            name: 'Letícia Ferraz',
            username: '@leh7',
            avatar: 'http://localhost:8080/avatar/id/41'
        },
        content: 'Hoje acordei mais leve, às vezes tudo o que precisamos é de silêncio e um bom café. ☕✨',
        hashtags: ['#paz', '#silêncio', '#café'],
        createdAt: '2025-08-17T08:15:00Z',
        likes: 31,
        comments: 3
    },
    {
        id: 202,
        author: {
            id: 41,
            name: 'Letícia Ferraz',
            username: '@leh7',
            avatar: 'http://localhost:8080/avatar/id/41'
        },
        content: 'Uma caminhada pela manhã muda completamente a energia do dia. 🚶‍♀️🌞',
        hashtags: ['#energia', '#bemestar', '#vida'],
        createdAt: '2025-08-17T09:00:00Z',
        likes: 45,
        comments: 6
    },
    {
        id: 203,
        author: {
            id: 41,
            name: 'Letícia Ferraz',
            username: '@leh7',
            avatar: 'http://localhost:8080/avatar/id/41'
        },
        content: 'Não subestime o poder de um pequeno passo todos os dias. 🪄🌱',
        hashtags: ['#motivação', '#crescimento', '#consistência'],
        createdAt: '2025-08-17T12:20:00Z',
        likes: 52,
        comments: 7
    },
    {
        id: 204,
        author: {
            id: 41,
            name: 'Letícia Ferraz',
            username: '@leh7',
            avatar: 'http://localhost:8080/avatar/id/41'
        },
        content: 'Domingo é dia de organizar a mente e preparar o coração para a semana. 💫🗓️',
        hashtags: ['#organização', '#domingo', '#equilíbrio'],
        createdAt: '2025-08-17T18:40:00Z',
        likes: 38,
        comments: 5
    },
    {
        id: 205,
        author: {
            id: 41,
            name: 'Letícia Ferraz',
            username: '@leh7',
            avatar: 'http://localhost:8080/avatar/id/41'
        },
        content: 'A gratidão transforma a forma como enxergamos cada detalhe da vida. 🌺🙏',
        hashtags: ['#gratidão', '#vida', '#positividade'],
        createdAt: '2025-08-17T21:10:00Z',
        likes: 47,
        comments: 8
    },
    //Postagens de Carolina Carpenter - @carolilna_carpenter
    {
        id: 206,
        author: {
            id: 42,
            name: 'Carolina Carpenter',
            username: '@carolilna_carpenter',
            avatar: 'http://localhost:8080/avatar/id/42'
        },
        content: 'Começando a semana com café forte e boas ideias. ☕💡',
        hashtags: ['#segunda', '#energia', '#boasvibrações'],
        createdAt: '2025-08-18T08:15:00Z',
        likes: 18,
        comments: 2
    },
    {
        id: 207,
        author: {
            id: 42,
            name: 'Carolina Carpenter',
            username: '@carolilna_carpenter',
            avatar: 'http://localhost:8080/avatar/id/42'
        },
        content: 'Nada como uma boa playlist para acompanhar o trabalho. 🎶💻',
        hashtags: ['#música', '#trabalho', '#produtividade'],
        createdAt: '2025-08-18T11:40:00Z',
        likes: 22,
        comments: 3
    },
    {
        id: 208,
        author: {
            id: 42,
            name: 'Carolina Carpenter',
            username: '@carolilna_carpenter',
            avatar: 'http://localhost:8080/avatar/id/42'
        },
        content: 'Às vezes, tudo o que precisamos é de uma pausa para respirar fundo. 🌿✨',
        hashtags: ['#equilíbrio', '#bemestar', '#paz'],
        createdAt: '2025-08-18T14:10:00Z',
        likes: 29,
        comments: 5
    },
    {
        id: 209,
        author: {
            id: 42,
            name: 'Carolina Carpenter',
            username: '@carolilna_carpenter',
            avatar: 'http://localhost:8080/avatar/id/42'
        },
        content: 'Cada dia é uma nova oportunidade de escrever nossa própria história. 📖🌟',
        hashtags: ['#motivação', '#inspiração', '#vida'],
        createdAt: '2025-08-18T17:55:00Z',
        likes: 35,
        comments: 6
    },
    {
        id: 210,
        author: {
            id: 42,
            name: 'Carolina Carpenter',
            username: '@carolilna_carpenter',
            avatar: 'http://localhost:8080/avatar/id/42'
        },
        content: 'Um pôr do sol sempre traz a sensação de recomeço. 🌅❤️',
        hashtags: ['#pordosol', '#natureza', '#gratidão'],
        createdAt: '2025-08-18T19:45:00Z',
        likes: 41,
        comments: 7
    },
    //Postagens de Vincent Bauboa - @vincent
    {
        id: 211,
        author: {
            id: 43,
            name: 'Vincent Bauboa',
            username: '@vincent',
            avatar: 'http://localhost:8080/avatar/id/43'
        },
        content: 'Spent the whole night in the studio and finally finished a track that feels like pure magic. Can’t wait to share it. 🎶✨',
        hashtags: ['#music', '#studio', '#newtrack'],
        createdAt: '2025-08-17T03:10:00Z',
        likes: 87,
        comments: 15
    },
    {
        id: 212,
        author: {
            id: 43,
            name: 'Vincent Bauboa',
            username: '@vincent',
            avatar: 'http://localhost:8080/avatar/id/43'
        },
        content: 'Sometimes the best songs come from the simplest moments. Just me, my guitar, and the sunset. 🌅🎸',
        hashtags: ['#songwriting', '#artistlife', '#inspiration'],
        createdAt: '2025-08-17T22:45:00Z',
        likes: 65,
        comments: 9
    },
    {
        id: 213,
        author: {
            id: 43,
            name: 'Vincent Bauboa',
            username: '@vincent',
            avatar: 'http://localhost:8080/avatar/id/43'
        },
        content: 'Performing live is where I feel most alive. Thank you to everyone who came out last night—your energy was unreal! 🔥🙌',
        hashtags: ['#livemusic', '#performance', '#gratitude'],
        createdAt: '2025-08-18T04:30:00Z',
        likes: 142,
        comments: 22
    },
    {
        id: 214,
        author: {
            id: 43,
            name: 'Vincent Bauboa',
            username: '@vincent',
            avatar: 'http://localhost:8080/avatar/id/43'
        },
        content: 'Art isn’t about perfection, it’s about connection. Every note, every lyric, is a piece of my soul. 🎤💫',
        hashtags: ['#artist', '#creativity', '#musicislife'],
        createdAt: '2025-08-18T11:20:00Z',
        likes: 73,
        comments: 12
    },
    {
        id: 215,
        author: {
            id: 43,
            name: 'Vincent Bauboa',
            username: '@vincent',
            avatar: 'http://localhost:8080/avatar/id/43'
        },
        content: 'Working on a collab with an incredible musician—this one’s gonna surprise you. Stay tuned. 👀🎵',
        hashtags: ['#collaboration', '#newmusic', '#artistlife'],
        createdAt: '2025-08-18T18:55:00Z',
        likes: 99,
        comments: 18
    },
    //Postagens de Ludmila Melo - @luh_melo
    {
        id: 216,
        author: {
            id: 44,
            name: 'Ludmila Melo',
            username: '@luh_melo',
            avatar: 'http://localhost:8080/avatar/id/44'
        },
        content: 'A vida é feita de pequenos momentos que se tornam grandes lembranças. 💫',
        hashtags: ['#momentos', '#lembranças', '#vida'],
        createdAt: '2025-08-18T09:15:00Z',
        likes: 34,
        comments: 6
    },
    {
        id: 217,
        author: {
            id: 44,
            name: 'Ludmila Melo',
            username: '@luh_melo',
            avatar: 'http://localhost:8080/avatar/id/44'
        },
        content: 'A persistência transforma sonhos em realidade. ✨',
        hashtags: ['#foco', '#determinação', '#sonhos'],
        createdAt: '2025-08-18T11:20:00Z',
        likes: 41,
        comments: 5
    },
    {
        id: 218,
        author: {
            id: 44,
            name: 'Ludmila Melo',
            username: '@luh_melo',
            avatar: 'http://localhost:8080/avatar/id/44'
        },
        content: 'Nada como uma boa música para mudar o humor do dia. 🎶',
        hashtags: ['#música', '#goodvibes', '#energia'],
        createdAt: '2025-08-18T14:45:00Z',
        likes: 28,
        comments: 3
    },
    {
        id: 219,
        author: {
            id: 44,
            name: 'Ludmila Melo',
            username: '@luh_melo',
            avatar: 'http://localhost:8080/avatar/id/44'
        },
        content: 'Gratidão por cada conquista, por menor que seja. 🌻',
        hashtags: ['#gratidão', '#positividade', '#conquistas'],
        createdAt: '2025-08-18T17:10:00Z',
        likes: 39,
        comments: 7
    },
    {
        id: 220,
        author: {
            id: 44,
            name: 'Ludmila Melo',
            username: '@luh_melo',
            avatar: 'http://localhost:8080/avatar/id/44'
        },
        content: 'Um passo de cada vez, mas sempre em frente. 🚶‍♀️',
        hashtags: ['#foco', '#determinação', '#força'],
        createdAt: '2025-08-18T19:30:00Z',
        likes: 32,
        comments: 4
    },
    //Postagens de Thiago Machado - @thiago_machado0
    {
        id: 221,
        author: {
            id: 45,
            name: 'Thiago Machado',
            username: '@thiago_machado0',
            avatar: 'http://localhost:8080/avatar/id/45'
        },
        content: 'Segunda-feira começando e já tô cheio de planos pra colocar em prática. 🚀💡',
        hashtags: ['#foco', '#motivação', '#novasemana'],
        createdAt: '2025-08-18T08:00:00Z',
        likes: 34,
        comments: 7
    },
    {
        id: 222,
        author: {
            id: 45,
            name: 'Thiago Machado',
            username: '@thiago_machado0',
            avatar: 'http://localhost:8080/avatar/id/45'
        },
        content: 'Às vezes, um café forte resolve metade dos problemas do dia. ☕🔥',
        hashtags: ['#café', '#rotina', '#vida'],
        createdAt: '2025-08-18T10:15:00Z',
        likes: 21,
        comments: 3
    },
    {
        id: 223,
        author: {
            id: 45,
            name: 'Thiago Machado',
            username: '@thiago_machado0',
            avatar: 'http://localhost:8080/avatar/id/45'
        },
        content: 'No meio da correria, a gente precisa aprender a celebrar as pequenas vitórias. 🎉✨',
        hashtags: ['#gratidão', '#vitórias', '#positividade'],
        createdAt: '2025-08-18T14:40:00Z',
        likes: 48,
        comments: 9
    },
    {
        id: 224,
        author: {
            id: 45,
            name: 'Thiago Machado',
            username: '@thiago_machado0',
            avatar: 'http://localhost:8080/avatar/id/45'
        },
        content: 'Música alta e mente leve. Nada melhor pra seguir o dia. 🎶😌',
        hashtags: ['#música', '#relaxar', '#energia'],
        createdAt: '2025-08-18T18:10:00Z',
        likes: 27,
        comments: 6
    },
    {
        id: 225,
        author: {
            id: 45,
            name: 'Thiago Machado',
            username: '@thiago_machado0',
            avatar: 'http://localhost:8080/avatar/id/45'
        },
        content: 'Fechando o dia com a sensação de dever cumprido. 🙏✨',
        hashtags: ['#paz', '#fimdedia', '#equilíbrio'],
        createdAt: '2025-08-18T22:00:00Z',
        likes: 39,
        comments: 5
    },
    //Postagens de Andressa Fernandes - @drê_fernandes
    {
        id: 226,
        author: {
            id: 46,
            name: 'Andressa Fernandes',
            username: '@drê_fernandes',
            avatar: 'http://localhost:8080/avatar/id/46'
        },
        content: 'Comprei uma planta pra dar vida à sala… dois dias depois ela me olha como se dissesse: “me devolve pro mato, criatura”. 🌱😂',
        hashtags: ['#vidaemcasa', '#plantas', '#humor'],
        createdAt: '2025-08-19T09:15:00Z',
        likes: 45,
        comments: 7
    },
    {
        id: 227,
        author: {
            id: 46,
            name: 'Andressa Fernandes',
            username: '@drê_fernandes',
            avatar: 'http://localhost:8080/avatar/id/46'
        },
        content: 'Eu tentando comer saudável: salada e frango grelhado. Duas horas depois: “cadê meu brigadeiro, gente?” 🍫🙃',
        hashtags: ['#alimentação', '#humor', '#gula'],
        createdAt: '2025-08-19T11:30:00Z',
        likes: 52,
        comments: 8
    },
    {
        id: 228,
        author: {
            id: 46,
            name: 'Andressa Fernandes',
            username: '@drê_fernandes',
            avatar: 'http://localhost:8080/avatar/id/46'
        },
        content: 'Quem inventou segunda-feira devia estar de mal com a humanidade. Só pode. ☕️😭',
        hashtags: ['#segunda-feira', '#realidade', '#humor'],
        createdAt: '2025-08-19T08:00:00Z',
        likes: 38,
        comments: 6
    },
    {
        id: 229,
        author: {
            id: 46,
            name: 'Andressa Fernandes',
            username: '@drê_fernandes',
            avatar: 'http://localhost:8080/avatar/id/46'
        },
        content: 'Jurei que ia dormir cedo ontem… lembrei de “só um episódio”. Agora tô aqui parecendo um zumbi elegante. 🧟‍♀️📺',
        hashtags: ['#sono', '#séries', '#humor'],
        createdAt: '2025-08-19T23:15:00Z',
        likes: 41,
        comments: 5
    },
    {
        id: 230,
        author: {
            id: 46,
            name: 'Andressa Fernandes',
            username: '@drê_fernandes',
            avatar: 'http://localhost:8080/avatar/id/46'
        },
        content: 'Fazer lista de tarefas e… esquecer onde coloquei a lista. Produtividade nível expert. 📝😅',
        hashtags: ['#organização', '#humor', '#vida'],
        createdAt: '2025-08-19T14:45:00Z',
        likes: 36,
        comments: 4
    },
    //Postagens de Mario Alves - @mario_alves
    {
        id: 231,
        author: {
            id: 47,
            name: 'Mario Alves',
            username: '@mario_alves',
            avatar: 'http://localhost:8080/avatar/id/47'
        },
        content: 'Experimentando novas técnicas de pintura hoje. Cada traço é uma descoberta. 🎨✨',
        hashtags: ['#arte', '#pintura', '#criatividade'],
        createdAt: '2025-08-19T10:00:00Z',
        likes: 52,
        comments: 8
    },
    {
        id: 232,
        author: {
            id: 47,
            name: 'Mario Alves',
            username: '@mario_alves',
            avatar: 'http://localhost:8080/avatar/id/47'
        },
        content: 'Nada como ouvir jazz enquanto o pincel dança sobre a tela. 🎷🖌️',
        hashtags: ['#arte', '#jazz', '#inspiração'],
        createdAt: '2025-08-19T12:30:00Z',
        likes: 47,
        comments: 6
    },
    {
        id: 233,
        author: {
            id: 47,
            name: 'Mario Alves',
            username: '@mario_alves',
            avatar: 'http://localhost:8080/avatar/id/47'
        },
        content: 'Uma obra nunca está pronta, apenas em constante evolução. 🖌️🌟',
        hashtags: ['#arte', '#evolução', '#criatividade'],
        createdAt: '2025-08-19T15:00:00Z',
        likes: 61,
        comments: 9
    },
    {
        id: 234,
        author: {
            id: 47,
            name: 'Mario Alves',
            username: '@mario_alves',
            avatar: 'http://localhost:8080/avatar/id/47'
        },
        content: 'Participando de uma exposição local. Nada melhor que ver pessoas emocionadas com o que criamos. 🖼️❤️',
        hashtags: ['#arte', '#exposição', '#emoção'],
        createdAt: '2025-08-19T18:20:00Z',
        likes: 73,
        comments: 12
    },
    {
        id: 235,
        author: {
            id: 47,
            name: 'Mario Alves',
            username: '@mario_alves',
            avatar: 'http://localhost:8080/avatar/id/47'
        },
        content: 'Criar é o meu refúgio, meu momento de liberdade absoluta. 🌈🎨',
        hashtags: ['#arte', '#liberdade', '#criatividade'],
        createdAt: '2025-08-19T20:45:00Z',
        likes: 59,
        comments: 7
    },
    //Postagens de Amanda Flores - @me_amanda0
    {
        id: 236,
        author: {
            id: 48,
            name: 'Amanda Flores',
            username: '@me_amanda0',
            avatar: 'http://localhost:8080/avatar/id/48'
        },
        content: 'Hoje acordei com tanta energia… que fui tomar mais um cochilo. 😅🛌',
        hashtags: ['#vidaReal', '#preguiça', '#humor'],
        createdAt: '2025-08-20T08:15:00Z',
        likes: 42,
        comments: 6
    },
    {
        id: 237,
        author: {
            id: 48,
            name: 'Amanda Flores',
            username: '@me_amanda0',
            avatar: 'http://localhost:8080/avatar/id/48'
        },
        content: 'Minha meta do dia: ser produtiva. Realidade: passei horas conversando com meu cachorro. 🐶😂',
        hashtags: ['#procrastinação', '#humor', '#vida'],
        createdAt: '2025-08-20T10:30:00Z',
        likes: 37,
        comments: 5
    },
    {
        id: 238,
        author: {
            id: 48,
            name: 'Amanda Flores',
            username: '@me_amanda0',
            avatar: 'http://localhost:8080/avatar/id/48'
        },
        content: 'Tentei cozinhar… e agora o detector de fumaça tá me xingando. 🍳🔥😅',
        hashtags: ['#cozinha', '#desastre', '#humor'],
        createdAt: '2025-08-20T13:00:00Z',
        likes: 44,
        comments: 7
    },
    {
        id: 239,
        author: {
            id: 48,
            name: 'Amanda Flores',
            username: '@me_amanda0',
            avatar: 'http://localhost:8080/avatar/id/48'
        },
        content: 'Minha dieta: começa amanhã. Meu estômago: começa agora. 🍕🤣',
        hashtags: ['#dietaFail', '#humor', '#comida'],
        createdAt: '2025-08-20T15:20:00Z',
        likes: 50,
        comments: 8
    },
    {
        id: 240,
        author: {
            id: 48,
            name: 'Amanda Flores',
            username: '@me_amanda0',
            avatar: 'http://localhost:8080/avatar/id/48'
        },
        content: 'Se rir é o melhor remédio, tô curada de todos os problemas da semana. 😂💊',
        hashtags: ['#humor', '#alegria', '#vida'],
        createdAt: '2025-08-20T18:45:00Z',
        likes: 55,
        comments: 9
    },
    //Postagens de Eliot Page - @eliot_page
    {
        id: 241,
        author: {
            id: 49,
            name: 'Eliot Page',
            username: '@eliot_page',
            avatar: 'http://localhost:8080/avatar/id/49'
        },
        content: 'Spent the day exploring new color palettes for my upcoming projects. 🎨✨',
        hashtags: ['#design', '#colors', '#creativity'],
        createdAt: '2025-08-21T09:00:00Z',
        likes: 48,
        comments: 6
    },
    {
        id: 242,
        author: {
            id: 49,
            name: 'Eliot Page',
            username: '@eliot_page',
            avatar: 'http://localhost:8080/avatar/id/49'
        },
        content: 'Minimalism is not about what you remove, it’s about what you choose to keep. 🖌️🖤',
        hashtags: ['#design', '#minimalism', '#inspiration'],
        createdAt: '2025-08-21T11:15:00Z',
        likes: 53,
        comments: 7
    },
    {
        id: 243,
        author: {
            id: 49,
            name: 'Eliot Page',
            username: '@eliot_page',
            avatar: 'http://localhost:8080/avatar/id/49'
        },
        content: 'Playing with typography is like exploring emotions on a digital canvas. ✍️🎨',
        hashtags: ['#typography', '#design', '#creativity'],
        createdAt: '2025-08-21T13:40:00Z',
        likes: 39,
        comments: 5
    },
    {
        id: 244,
        author: {
            id: 49,
            name: 'Eliot Page',
            username: '@eliot_page',
            avatar: 'http://localhost:8080/avatar/id/49'
        },
        content: 'Today my mood is vector and gradient. Always stylish, always creative. 🌈🖌️',
        hashtags: ['#graphicdesign', '#vector', '#colors'],
        createdAt: '2025-08-21T16:10:00Z',
        likes: 46,
        comments: 6
    },
    {
        id: 245,
        author: {
            id: 49,
            name: 'Eliot Page',
            username: '@eliot_page',
            avatar: 'http://localhost:8080/avatar/id/49'
        },
        content: 'Nothing beats seeing a clean, functional interface come alive in the user’s hands. 💻✨',
        hashtags: ['#UX', '#UI', '#design'],
        createdAt: '2025-08-21T18:45:00Z',
        likes: 58,
        comments: 9
    },
    //Postagens de Bruce Cane - @me_bruce
    {
        id: 246,
        author: {
            id: 50,
            name: 'Bruce Cane',
            username: '@me_bruce',
            avatar: 'http://localhost:8080/avatar/id/50'
        },
        content: 'Nothing like a cup of coffee to make Monday feel slightly less like a Monday. ☕😂',
        hashtags: ['#coffee', '#mondayvibes', '#humor'],
        createdAt: '2025-08-22T08:15:00Z',
        likes: 44,
        comments: 7
    },
    {
        id: 247,
        author: {
            id: 50,
            name: 'Bruce Cane',
            username: '@me_bruce',
            avatar: 'http://localhost:8080/avatar/id/50'
        },
        content: 'Tried to eat healthy today… ended up negotiating with a slice of pizza. 🍕😅',
        hashtags: ['#foodie', '#dietfail', '#humor'],
        createdAt: '2025-08-22T11:00:00Z',
        likes: 51,
        comments: 8
    },
    {
        id: 248,
        author: {
            id: 50,
            name: 'Bruce Cane',
            username: '@me_bruce',
            avatar: 'http://localhost:8080/avatar/id/50'
        },
        content: 'Work-from-home life: pants optional, creativity mandatory. 😎💻',
        hashtags: ['#wfh', '#humor', '#creativity'],
        createdAt: '2025-08-22T13:30:00Z',
        likes: 39,
        comments: 6
    },
    {
        id: 249,
        author: {
            id: 50,
            name: 'Bruce Cane',
            username: '@me_bruce',
            avatar: 'http://localhost:8080/avatar/id/50'
        },
        content: 'My plant is judging me for forgetting to water it… silently, but I feel it. 🌱😂',
        hashtags: ['#plants', '#humor', '#life'],
        createdAt: '2025-08-22T16:00:00Z',
        likes: 47,
        comments: 5
    },
    {
        id: 250,
        author: {
            id: 50,
            name: 'Bruce Cane',
            username: '@me_bruce',
            avatar: 'http://localhost:8080/avatar/id/50'
        },
        content: 'If procrastination was an Olympic sport, I’d have a gold medal by now. 🏅😅',
        hashtags: ['#procrastination', '#humor', '#life'],
        createdAt: '2025-08-22T19:45:00Z',
        likes: 55,
        comments: 9
    },
    //Postagens de Marcos Benicio - @by_marcos
    {
        id: 251,
        author: {
            id: 51,
            name: 'Marcos Benicio',
            username: '@by_marcos',
            avatar: 'http://localhost:8080/avatar/id/51'
        },
        content: 'Hoje fui chamado para consertar um disjuntor… e acabei aprendendo umas gambiarras novas. ⚡😅',
        hashtags: ['#eletricista', '#trabalho', '#humor'],
        createdAt: '2025-08-23T08:30:00Z',
        likes: 38,
        comments: 5
    },
    {
        id: 252,
        author: {
            id: 51,
            name: 'Marcos Benicio',
            username: '@by_marcos',
            avatar: 'http://localhost:8080/avatar/id/51'
        },
        content: 'Nada como a sensação de acender a luz depois de horas mexendo em fiação antiga. 💡✨',
        hashtags: ['#eletricista', '#trabalho', '#satisfação'],
        createdAt: '2025-08-23T10:15:00Z',
        likes: 45,
        comments: 6
    },
    {
        id: 253,
        author: {
            id: 51,
            name: 'Marcos Benicio',
            username: '@by_marcos',
            avatar: 'http://localhost:8080/avatar/id/51'
        },
        content: 'Quando o cliente diz “não sei onde é o problema” e você encontra tudo desligado… 😂⚡',
        hashtags: ['#humor', '#eletricista', '#trabalho'],
        createdAt: '2025-08-23T12:40:00Z',
        likes: 50,
        comments: 7
    },
    {
        id: 254,
        author: {
            id: 51,
            name: 'Marcos Benicio',
            username: '@by_marcos',
            avatar: 'http://localhost:8080/avatar/id/51'
        },
        content: 'Luzes piscando? Possível curto. Eu piscando? Possível sono. ⚡😴',
        hashtags: ['#eletricista', '#humor', '#vida'],
        createdAt: '2025-08-23T15:20:00Z',
        likes: 42,
        comments: 5
    },
    {
        id: 255,
        author: {
            id: 51,
            name: 'Marcos Benicio',
            username: '@by_marcos',
            avatar: 'http://localhost:8080/avatar/id/51'
        },
        content: 'Se a eletricidade fosse dinheiro, eu seria milionário! 💸⚡😂',
        hashtags: ['#eletricista', '#humor', '#vida'],
        createdAt: '2025-08-23T18:00:00Z',
        likes: 55,
        comments: 8
    },
    //Postagens de Lore Macclincy - @me_lore
    {
        id: 256,
        author: {
            id: 52,
            name: 'Lore Macclincy',
            username: '@me_lore',
            avatar: 'http://localhost:8080/avatar/id/52'
        },
        content: 'Woke up to a snowy morning and realized my coffee was the only thing keeping me warm. ❄️☕️',
        hashtags: ['#winter', '#coffee', '#morningvibes'],
        createdAt: '2025-08-24T08:00:00Z',
        likes: 48,
        comments: 6
    },
    {
        id: 257,
        author: {
            id: 52,
            name: 'Lore Macclincy',
            username: '@me_lore',
            avatar: 'http://localhost:8080/avatar/id/52'
        },
        content: 'Trying to stay productive, but my cat clearly has other plans. 🐱😂',
        hashtags: ['#catlife', '#humor', '#workfromhome'],
        createdAt: '2025-08-24T10:30:00Z',
        likes: 52,
        comments: 7
    },
    {
        id: 258,
        author: {
            id: 52,
            name: 'Lore Macclincy',
            username: '@me_lore',
            avatar: 'http://localhost:8080/avatar/id/52'
        },
        content: 'The maple syrup in Canada is not just a treat, it’s practically a lifestyle. 🍁🥞',
        hashtags: ['#canada', '#maplesyrup', '#life'],
        createdAt: '2025-08-24T12:45:00Z',
        likes: 47,
        comments: 5
    },
    {
        id: 259,
        author: {
            id: 52,
            name: 'Lore Macclincy',
            username: '@me_lore',
            avatar: 'http://localhost:8080/avatar/id/52'
        },
        content: 'If snow falls in August, does it still count as summer? Asking for a friend. ❄️🤔',
        hashtags: ['#snow', '#canada', '#humor'],
        createdAt: '2025-08-24T15:20:00Z',
        likes: 43,
        comments: 6
    },
    {
        id: 260,
        author: {
            id: 52,
            name: 'Lore Macclincy',
            username: '@me_lore',
            avatar: 'http://localhost:8080/avatar/id/52'
        },
        content: 'Nothing beats a warm fireplace and a good book on a chilly Canadian evening. 🔥📖',
        hashtags: ['#cozy', '#canada', '#reading'],
        createdAt: '2025-08-24T18:00:00Z',
        likes: 55,
        comments: 8
    },
    //Postagens de Bruno Silva - @bruno09
    {
        id: 261,
        author: {
            id: 53,
            name: 'Bruno Silva',
            username: '@bruno09',
            avatar: 'http://localhost:8080/avatar/id/53'
        },
        content: 'Fui tentar cozinhar e quase liguei o bombeiro no lugar do fogão',
        hashtags: ['#humor', '#cozinha', '#vidaReal'],
        createdAt: '2025-08-25T08:00:00Z',
        likes: 35,
        comments: 4
    },
    {
        id: 262,
        author: {
            id: 53,
            name: 'Bruno Silva',
            username: '@bruno09',
            avatar: 'http://localhost:8080/avatar/id/53'
        },
        content: 'Segunda-feira chegou e trouxe todos os meus e-mails indesejados para a festa',
        hashtags: ['#trabalho', '#humor', '#segundaFeira'],
        createdAt: '2025-08-25T10:30:00Z',
        likes: 42,
        comments: 5
    },
    {
        id: 263,
        author: {
            id: 53,
            name: 'Bruno Silva',
            username: '@bruno09',
            avatar: 'http://localhost:8080/avatar/id/53'
        },
        content: 'Meu cachorro parece que entende tudo que eu digo, mas escolhe ignorar todas as ordens',
        hashtags: ['#humor', '#vidaComPets', '#diversão'],
        createdAt: '2025-08-25T12:45:00Z',
        likes: 38,
        comments: 6
    },
    {
        id: 264,
        author: {
            id: 53,
            name: 'Bruno Silva',
            username: '@bruno09',
            avatar: 'http://localhost:8080/avatar/id/53'
        },
        content: 'Comecei uma dieta hoje e meu cérebro já está planejando a fuga da geladeira',
        hashtags: ['#humor', '#dieta', '#vidaReal'],
        createdAt: '2025-08-25T15:20:00Z',
        likes: 47,
        comments: 7
    },
    {
        id: 265,
        author: {
            id: 53,
            name: 'Bruno Silva',
            username: '@bruno09',
            avatar: 'http://localhost:8080/avatar/id/53'
        },
        content: 'Se rir é mesmo o melhor remédio, eu estou praticamente curado de tudo',
        hashtags: ['#humor', '#vidaReal', '#alegria'],
        createdAt: '2025-08-25T18:00:00Z',
        likes: 53,
        comments: 9
    },
    //Postagens de Bruna Gomes - @eu_bruna_gomes
    {
        id: 266,
        author: {
            id: 54,
            name: 'Bruna Gomes',
            username: '@eu_bruna_gomes',
            avatar: 'http://localhost:8080/avatar/id/54'
        },
        content: 'Hoje acordei cedo… e me arrependi imediatamente',
        hashtags: ['#humor', '#vidaReal', '#sono'],
        createdAt: '2025-08-26T07:45:00Z',
        likes: 36,
        comments: 4
    },
    {
        id: 267,
        author: {
            id: 54,
            name: 'Bruna Gomes',
            username: '@eu_bruna_gomes',
            avatar: 'http://localhost:8080/avatar/id/54'
        },
        content: 'Tentei ser produtiva, mas meu sofá me fez uma proposta que não pude recusar',
        hashtags: ['#humor', '#preguiça', '#vidaReal'],
        createdAt: '2025-08-26T10:15:00Z',
        likes: 42,
        comments: 5
    },
    {
        id: 268,
        author: {
            id: 54,
            name: 'Bruna Gomes',
            username: '@eu_bruna_gomes',
            avatar: 'http://localhost:8080/avatar/id/54'
        },
        content: 'Meu computador travou de novo. Acho que ele está de greve silenciosa',
        hashtags: ['#humor', '#tecnologia', '#vidaReal'],
        createdAt: '2025-08-26T12:30:00Z',
        likes: 39,
        comments: 6
    },
    {
        id: 269,
        author: {
            id: 54,
            name: 'Bruna Gomes',
            username: '@eu_bruna_gomes',
            avatar: 'http://localhost:8080/avatar/id/54'
        },
        content: 'Fui tentar organizar minha vida… e encontrei um monte de tarefas antigas que eu nem lembrava',
        hashtags: ['#humor', '#desorganização', '#vidaReal'],
        createdAt: '2025-08-26T15:00:00Z',
        likes: 44,
        comments: 7
    },
    {
        id: 270,
        author: {
            id: 54,
            name: 'Bruna Gomes',
            username: '@eu_bruna_gomes',
            avatar: 'http://localhost:8080/avatar/id/54'
        },
        content: 'Se rir é saudável, então estou vivendo como uma atleta olímpica',
        hashtags: ['#humor', '#alegria', '#vidaReal'],
        createdAt: '2025-08-26T18:20:00Z',
        likes: 50,
        comments: 8
    },
    //Postagens de Vanda Junqueira - @vanda_junqueira
    {
        id: 271,
        author: {
            id: 55,
            name: 'Vanda Junqueira',
            username: '@vanda_junqueira',
            avatar: 'http://localhost:8080/avatar/id/55'
        },
        content: 'Acordei cedo pra me exercitar… e acabei me exercitando só para desligar o despertador',
        hashtags: ['#humor', '#preguiça', '#vidaReal'],
        createdAt: '2025-08-27T07:30:00Z',
        likes: 37,
        comments: 5
    },
    {
        id: 272,
        author: {
            id: 55,
            name: 'Vanda Junqueira',
            username: '@vanda_junqueira',
            avatar: 'http://localhost:8080/avatar/id/55'
        },
        content: 'Segunda-feira chegou e trouxe aquele e-mail que ninguém quer ler',
        hashtags: ['#humor', '#trabalho', '#vidaReal'],
        createdAt: '2025-08-27T09:45:00Z',
        likes: 41,
        comments: 6
    },
    {
        id: 273,
        author: {
            id: 55,
            name: 'Vanda Junqueira',
            username: '@vanda_junqueira',
            avatar: 'http://localhost:8080/avatar/id/55'
        },
        content: 'Meu gato decidiu sentar no teclado e agora meu relatório tem mais histórias que dados',
        hashtags: ['#humor', '#gatos', '#vidaReal'],
        createdAt: '2025-08-27T12:15:00Z',
        likes: 45,
        comments: 7
    },
    {
        id: 274,
        author: {
            id: 55,
            name: 'Vanda Junqueira',
            username: '@vanda_junqueira',
            avatar: 'http://localhost:8080/avatar/id/55'
        },
        content: 'Decidi cozinhar hoje… e agora estou negociando com o micro-ondas',
        hashtags: ['#humor', '#cozinha', '#vidaReal'],
        createdAt: '2025-08-27T14:40:00Z',
        likes: 42,
        comments: 5
    },
    {
        id: 275,
        author: {
            id: 55,
            name: 'Vanda Junqueira',
            username: '@vanda_junqueira',
            avatar: 'http://localhost:8080/avatar/id/55'
        },
        content: 'Se rir fosse exercício físico, eu estaria pronta para a maratona',
        hashtags: ['#humor', '#alegria', '#vidaReal'],
        createdAt: '2025-08-27T17:20:00Z',
        likes: 48,
        comments: 8
    },
    //Postagens de Mariana Santino - @mah_santino
    {
        id: 276,
        author: {
            id: 56,
            name: 'Mariana Santino',
            username: '@mah_santino',
            avatar: 'http://localhost:8080/avatar/id/56'
        },
        content: 'Acordei motivada… até olhar a lista de tarefas e perceber que meu sofá é mais convincente',
        hashtags: ['#humor', '#preguiça', '#vidaReal'],
        createdAt: '2025-08-28T08:15:00Z',
        likes: 39,
        comments: 5
    },
    {
        id: 277,
        author: {
            id: 56,
            name: 'Mariana Santino',
            username: '@mah_santino',
            avatar: 'http://localhost:8080/avatar/id/56'
        },
        content: 'Segunda-feira chegou trazendo reuniões e café frio, a combinação perfeita',
        hashtags: ['#humor', '#trabalho', '#segundaFeira'],
        createdAt: '2025-08-28T10:40:00Z',
        likes: 44,
        comments: 6
    },
    {
        id: 278,
        author: {
            id: 56,
            name: 'Mariana Santino',
            username: '@mah_santino',
            avatar: 'http://localhost:8080/avatar/id/56'
        },
        content: 'Meu cachorro resolveu me ensinar a importância da soneca diária',
        hashtags: ['#humor', '#pets', '#vidaReal'],
        createdAt: '2025-08-28T13:05:00Z',
        likes: 41,
        comments: 5
    },
    {
        id: 279,
        author: {
            id: 56,
            name: 'Mariana Santino',
            username: '@mah_santino',
            avatar: 'http://localhost:8080/avatar/id/56'
        },
        content: 'Decidi fazer dieta… mas a geladeira começou a me fazer propostas tentadoras',
        hashtags: ['#humor', '#dieta', '#vidaReal'],
        createdAt: '2025-08-28T15:30:00Z',
        likes: 46,
        comments: 7
    },
    {
        id: 280,
        author: {
            id: 56,
            name: 'Mariana Santino',
            username: '@mah_santino',
            avatar: 'http://localhost:8080/avatar/id/56'
        },
        content: 'Se rir fosse esporte, eu já estaria treinando para as olimpíadas',
        hashtags: ['#humor', '#alegria', '#vidaReal'],
        createdAt: '2025-08-28T18:00:00Z',
        likes: 50,
        comments: 8
    },
    //Postagens de Madalena Buarque - @a_madah
    {
        id: 281,
        author: {
            id: 57,
            name: 'Madalena Buarque',
            username: '@a_madah',
            avatar: 'http://localhost:8080/avatar/id/57'
        },
        content: 'Acordei pensando em ser produtiva… e acabei negociando mais cinco minutos de sono',
        hashtags: ['#humor', '#preguiça', '#vidaReal'],
        createdAt: '2025-08-29T07:50:00Z',
        likes: 38,
        comments: 5
    },
    {
        id: 282,
        author: {
            id: 57,
            name: 'Madalena Buarque',
            username: '@a_madah',
            avatar: 'http://localhost:8080/avatar/id/57'
        },
        content: 'Segunda-feira: quando o café é mais convincente que qualquer plano de vida',
        hashtags: ['#humor', '#trabalho', '#café'],
        createdAt: '2025-08-29T10:20:00Z',
        likes: 42,
        comments: 6
    },
    {
        id: 283,
        author: {
            id: 57,
            name: 'Madalena Buarque',
            username: '@a_madah',
            avatar: 'http://localhost:8080/avatar/id/57'
        },
        content: 'Meu gato acha que eu sou empregado dele e não o contrário',
        hashtags: ['#humor', '#pets', '#vidaReal'],
        createdAt: '2025-08-29T12:45:00Z',
        likes: 44,
        comments: 7
    },
    {
        id: 284,
        author: {
            id: 57,
            name: 'Madalena Buarque',
            username: '@a_madah',
            avatar: 'http://localhost:8080/avatar/id/57'
        },
        content: 'Tentei cozinhar hoje e o resultado quase me convenceu a pedir delivery para sempre',
        hashtags: ['#humor', '#cozinha', '#vidaReal'],
        createdAt: '2025-08-29T15:10:00Z',
        likes: 41,
        comments: 6
    },
    {
        id: 285,
        author: {
            id: 57,
            name: 'Madalena Buarque',
            username: '@a_madah',
            avatar: 'http://localhost:8080/avatar/id/57'
        },
        content: 'Se rir fosse um esporte, minha medalha de ouro já estaria garantida',
        hashtags: ['#humor', '#alegria', '#vidaReal'],
        createdAt: '2025-08-29T17:45:00Z',
        likes: 47,
        comments: 8
    },
    //Postagens de Isabella Fliorine - @isah_7
    {
        id: 286,
        author: {
            id: 58,
            name: 'Isabella Fliorine',
            username: '@isah_7',
            avatar: 'http://localhost:8080/avatar/id/58'
        },
        content: 'Tentei começar a dieta hoje… mas meu coração e minha geladeira não entraram em acordo',
        hashtags: ['#humor', '#dieta', '#vidaReal'],
        createdAt: '2025-08-30T08:10:00Z',
        likes: 39,
        comments: 5
    },
    {
        id: 287,
        author: {
            id: 58,
            name: 'Isabella Fliorine',
            username: '@isah_7',
            avatar: 'http://localhost:8080/avatar/id/58'
        },
        content: 'Meu café da manhã estava tão bom que até considerei uma promoção para continuar dormindo',
        hashtags: ['#humor', '#café', '#vidaReal'],
        createdAt: '2025-08-30T10:30:00Z',
        likes: 43,
        comments: 6
    },
    {
        id: 288,
        author: {
            id: 58,
            name: 'Isabella Fliorine',
            username: '@isah_7',
            avatar: 'http://localhost:8080/avatar/id/58'
        },
        content: 'Decidi limpar a casa e acabei limpando só a vontade de trabalhar',
        hashtags: ['#humor', '#vidaReal', '#preguiça'],
        createdAt: '2025-08-30T12:55:00Z',
        likes: 41,
        comments: 5
    },
    {
        id: 289,
        author: {
            id: 58,
            name: 'Isabella Fliorine',
            username: '@isah_7',
            avatar: 'http://localhost:8080/avatar/id/58'
        },
        content: 'Meu cachorro parece mais disciplinado que eu… e isso diz muito sobre minha vida',
        hashtags: ['#humor', '#pets', '#vidaReal'],
        createdAt: '2025-08-30T15:20:00Z',
        likes: 44,
        comments: 6
    },
    {
        id: 290,
        author: {
            id: 58,
            name: 'Isabella Fliorine',
            username: '@isah_7',
            avatar: 'http://localhost:8080/avatar/id/58'
        },
        content: 'Se rir fosse trabalho, hoje eu estaria de férias permanentes',
        hashtags: ['#humor', '#alegria', '#vidaReal'],
        createdAt: '2025-08-30T17:50:00Z',
        likes: 48,
        comments: 7
    },
    //Postagens de Antônio Carlos Magalhâes - @antonio_carlos8
    {
        id: 291,
        author: {
            id: 59,
            name: 'Antônio Carlos Magalhâes',
            username: '@antonio_carlos8',
            avatar: 'http://localhost:8080/avatar/id/59'
        },
        content: 'Passei o dia tentando calcular estruturas… e acabei calculando só quantas xícaras de café eu precisava',
        hashtags: ['#humor', '#engenharia', '#vidaReal'],
        createdAt: '2025-08-31T08:15:00Z',
        likes: 41,
        comments: 5
    },
    {
        id: 292,
        author: {
            id: 59,
            name: 'Antônio Carlos Magalhâes',
            username: '@antonio_carlos8',
            avatar: 'http://localhost:8080/avatar/id/59'
        },
        content: 'Engenharia é maravilhosa, até você perceber que sua planta está de cabeça para baixo',
        hashtags: ['#humor', '#engenharia', '#vidaReal'],
        createdAt: '2025-08-31T10:40:00Z',
        likes: 45,
        comments: 6
    },
    {
        id: 293,
        author: {
            id: 59,
            name: 'Antônio Carlos Magalhâes',
            username: '@antonio_carlos8',
            avatar: 'http://localhost:8080/avatar/id/59'
        },
        content: 'Meu capacete me protege, mas não protege das minhas próprias ideias mirabolantes',
        hashtags: ['#humor', '#engenharia', '#vidaReal'],
        createdAt: '2025-08-31T12:55:00Z',
        likes: 43,
        comments: 5
    },
    {
        id: 294,
        author: {
            id: 59,
            name: 'Antônio Carlos Magalhâes',
            username: '@antonio_carlos8',
            avatar: 'http://localhost:8080/avatar/id/59'
        },
        content: 'Tentei organizar o canteiro de obras e organizei apenas minha paciência',
        hashtags: ['#humor', '#engenharia', '#vidaReal'],
        createdAt: '2025-08-31T15:20:00Z',
        likes: 46,
        comments: 7
    },
    {
        id: 295,
        author: {
            id: 59,
            name: 'Antônio Carlos Magalhâes',
            username: '@antonio_carlos8',
            avatar: 'http://localhost:8080/avatar/id/59'
        },
        content: 'Se rir fosse concreto, meu prédio já estaria de pé há anos',
        hashtags: ['#humor', '#engenharia', '#alegria'],
        createdAt: '2025-08-31T17:50:00Z',
        likes: 49,
        comments: 8
    },
    //Postagens de Júlia Rodrigues - @juh_rodrigues7
    {
        id: 296,
        author: {
            id: 60,
            name: 'Júlia Rodrigues',
            username: '@juh_rodrigues7',
            avatar: 'http://localhost:8080/avatar/id/60'
        },
        content: 'Passei o dia tirando fotos… e percebi que minha própria vida precisa de filtro',
        hashtags: ['#humor', '#fotografia', '#vidaReal'],
        createdAt: '2025-09-01T08:30:00Z',
        likes: 38,
        comments: 5
    },
    {
        id: 297,
        author: {
            id: 60,
            name: 'Júlia Rodrigues',
            username: '@juh_rodrigues7',
            avatar: 'http://localhost:8080/avatar/id/60'
        },
        content: 'Tentei organizar minhas redes sociais, mas minhas notificações têm vida própria',
        hashtags: ['#humor', '#socialMedia', '#vidaReal'],
        createdAt: '2025-09-01T10:50:00Z',
        likes: 42,
        comments: 6
    },
    {
        id: 298,
        author: {
            id: 60,
            name: 'Júlia Rodrigues',
            username: '@juh_rodrigues7',
            avatar: 'http://localhost:8080/avatar/id/60'
        },
        content: 'Meu cachorro se tornou meu assistente de fotos… e o mais bagunceiro',
        hashtags: ['#humor', '#fotografia', '#pets'],
        createdAt: '2025-09-01T13:15:00Z',
        likes: 40,
        comments: 5
    },
    {
        id: 299,
        author: {
            id: 60,
            name: 'Júlia Rodrigues',
            username: '@juh_rodrigues7',
            avatar: 'http://localhost:8080/avatar/id/60'
        },
        content: 'Decidi criar um novo projeto de fotos… mas a inspiração decidiu tirar férias',
        hashtags: ['#humor', '#fotografia', '#vidaReal'],
        createdAt: '2025-09-01T15:40:00Z',
        likes: 44,
        comments: 7
    },
    {
        id: 300,
        author: {
            id: 60,
            name: 'Júlia Rodrigues',
            username: '@juh_rodrigues7',
            avatar: 'http://localhost:8080/avatar/id/60'
        },
        content: 'Se rir fosse arte, eu já teria uma galeria inteira',
        hashtags: ['#humor', '#alegria', '#vidaReal'],
        createdAt: '2025-09-01T18:10:00Z',
        likes: 48,
        comments: 8
    }
]

module.exports = posts;