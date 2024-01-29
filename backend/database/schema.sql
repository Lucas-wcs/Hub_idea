-- SQLBook: Code

DROP TABLE IF EXISTS `User`;

DROP TABLE IF EXISTS `Status_idea`;

DROP TABLE IF EXISTS `Idea`;

DROP TABLE IF EXISTS `Vote`;

DROP TABLE IF EXISTS `Impacted_user`;

DROP TABLE IF EXISTS `Comment`;

CREATE TABLE `User` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `firstname` VARCHAR(255) NOT NULL, `lastname` VARCHAR(255) NOT NULL, `email` TEXT NOT NULL, `image_profil` VARCHAR(150), `password` VARCHAR(150) NOT NULL, `is_administrator` BOOLEAN NOT NULL DEFAULT 0, `is_moderator` BOOLEAN NOT NULL DEFAULT 0, `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
    User (
        firstname, lastname, email, image_profil, password, is_administrator, is_moderator, updated_at
    )
VALUES (
        'Étienne', 'Lefebvre', 'etienne@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 1, 0, CURRENT_TIMESTAMP
    ),
    (
        'Charlotte', 'Dubois', 'charlotte@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Antoine', 'Girard', 'antoine@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Manon', 'Martel', 'manon@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Luc', 'Berger', 'luc@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Léa', 'Lavoie', 'lea@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Gabriel', 'Boucher', 'gabriel@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Clara', 'Moreau', 'clara@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Mathis', 'Caron', 'mathis@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Emma', 'Gagnon', 'emma@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Nathan', 'Leblanc', 'nathan@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Chloé', 'Lemieux', 'chloe@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Adam', 'Perrault', 'adam@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Lola', 'Rousseau', 'lola@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Noah', 'Mercier', 'noah@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Rose', 'Gauthier', 'rose@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    );

CREATE TABLE `Status_idea` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `status_name` VARCHAR(30) DEFAULT "draft"
);

INSERT INTO
    Status_idea (status_name)
VALUES ("Brouillon"),
    (
        "En attente de l'administrateur"
    ),
    (
        "Refusée par l'administrateur"
    ),
    ("En cours de vote"),
    (
        "En attente décision modérateur"
    ),
    ("Idée validée"),
    ("Idée refusée");

CREATE TABLE `Idea` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `title` VARCHAR(100) NOT NULL, `idea_description` VARCHAR(1000) NOT NULL, `idea_image` VARCHAR(150) DEFAULT "https://picsum.photos/300/600", `idea_date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, `date_limit` DATETIME, `is_validation_administrator` BOOLEAN, `status_id` INT DEFAULT 1, `idea_final_comment` VARCHAR(500), `user_id` INT, CONSTRAINT `fk_idea_status_id` FOREIGN KEY (`status_id`) REFERENCES `Status_idea` (`id`), CONSTRAINT `fk_idea_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE
);

INSERT INTO
    Idea (
        title, idea_description, idea_image, date_limit, is_validation_administrator, status_id, user_id
    )
VALUES (
        "réaliser un repas de Noel", "Pour les fêtes de fin d'années et avant les vacances, ce serait sympa d'organiser un repas collectif", "/images/repas_noel.jpg", CURRENT_TIMESTAMP, 0, 1, 4
    ),
    (
        "changer les fenêtres du bureau 402", "Depuis plusieurs hivers, les fenêtres ne sont plus efficaces, il fait froid, il y a de l'humidité ; il faudrait donc remplacer ces fenêtres en urgence", "/images/bureau_402.jpg", CURRENT_TIMESTAMP, 0, 2, 3
    ),
    (
        "mettre une télé dans la salle de pause", "pour les pauses du midi, ce serait bien d'avoir une télé pour pouvoir jouer à la console ou regarder des films ou séries", "/images/pause.jpg", CURRENT_TIMESTAMP, 0, 3, 1
    ),
    (
        "Organiser une journée d'intégration", "Proposer une journée d'activités pour favoriser l'intégration des nouveaux employés dans l'entreprise.", "/images/integration.jpg", CURRENT_TIMESTAMP, 0, 4, 6
    ),
    (
        "Programme de mentorat interne", "Créer un programme de mentorat pour aider les employés juniors à développer leurs compétences avec l'aide des seniors.", "/images/mentor.jpg", CURRENT_TIMESTAMP, 0, 5, 7
    ),
    (
        "Amélioration des espaces de travail", "Réaménager les espaces de travail pour favoriser la collaboration et le bien-être des employés.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Initier des formations inter-équipes", "Organiser des sessions de formation où différentes équipes peuvent partager leurs connaissances et compétences.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Campagne de sensibilisation écologique", "Promouvoir des actions en faveur de l'environnement et sensibiliser les employés à adopter des pratiques durables.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Mise en place d'un système de récompenses", "Créer un système de récompenses pour reconnaître les employés méritants et encourager la productivité.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Evénements sociaux réguliers", "Organiser des événements sociaux périodiques pour renforcer la cohésion d'équipe et le moral des employés.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Développement d'une application interne", "Concevoir une application interne pour simplifier les processus de communication et de collaboration.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Création d'un programme de bien-être", "Lancer un programme de bien-être pour soutenir la santé mentale et physique des employés.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Installation d'équipements sportifs", "Installer des équipements sportifs pour encourager l'activité physique et la détente au sein de l'entreprise.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Événement d'Intégration", "Organiser un événement d'intégration pour les nouveaux employés. Les idées peuvent inclure des activités de team-building, des rencontres informelles, etc.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Amélioration des Espaces de Travail", "Proposer des suggestions pour améliorer l'ergonomie et la convivialité des espaces de travail. Cela peut inclure des idées pour la décoration, l'agencement des bureaux, etc.", "/images/espaces_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Projet de Responsabilité Sociale des Entreprises (RSE)", "Proposer des projets RSE qui permettront à l'entreprise de contribuer positivement à la communauté ou à l'environnement.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Programme de Mentorat", "Mettre en place un programme de mentorat pour favoriser le développement professionnel et personnel des employés.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Journée sans Réunion", "Proposer une journée par mois sans réunions pour permettre aux employés de se concentrer sur des tâches individuelles sans interruption.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Boîte à Idées Virtuelle", "Créer une boîte à idées virtuelle où les employés peuvent soumettre anonymement des suggestions d'amélioration ou d'innovation.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Programme de Flexibilité d'Horaire", "Proposer un programme de flexibilité d'horaire pour permettre aux employés de gérer leur temps de travail de manière plus adaptée à leurs besoins personnels.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Initiative de Développement Durable", "Mettre en place des initiatives visant à rendre l'entreprise plus respectueuse de l'environnement et à promouvoir le développement durable.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Concours d'Innovation", "Organiser un concours d'innovation pour stimuler la créativité des employés et encourager la proposition de nouvelles idées pour l'entreprise.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Projet de Volontariat d'Entreprise", "Encourager les employés à s'impliquer dans des projets de volontariat pour renforcer l'engagement social de l'entreprise.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Amélioration des Processus Internes", "Proposer des idées pour optimiser les processus internes de l'entreprise afin d'augmenter l'efficacité opérationnelle.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Récompenses pour l'Innovation", "Créer un programme de récompenses pour encourager et reconnaître les employés qui proposent des idées innovantes bénéfiques à l'entreprise.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Programme de Développement Professionnel", "Proposer un programme visant à développer les compétences professionnelles des employés par le biais de formations spécialisées et de certifications.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Semaine de la Diversité et de l'Inclusion", "Organiser une semaine dédiée à promouvoir la diversité et l'inclusion au sein de l'entreprise avec des événements, des ateliers, et des discussions.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Campagne de Sensibilisation à la Cybersécurité", "Lancer une campagne de sensibilisation pour informer les employés sur les meilleures pratiques en matière de cybersécurité et renforcer la sécurité des données.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Bibliothèque de Ressources Numériques", "Créer une bibliothèque numérique interne avec des ressources utiles, telles que des livres électroniques, des articles, et des vidéos, pour favoriser l'apprentissage continu.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Aménagement d'Espaces Collaboratifs", "Recueillir des suggestions pour aménager des espaces collaboratifs favorisant l'échange d'idées et la créativité au sein de l'entreprise.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Programme de Parrainage pour Nouveaux Employés", "Mettre en place un programme de parrainage où les employés expérimentés accompagnent les nouveaux arrivants pour faciliter leur intégration.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Hackathon Interne", "Organiser un hackathon interne pour stimuler l'innovation et encourager les employés à collaborer sur des projets créatifs.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Système de Récompenses pour la Productivité", "Proposer un système de récompenses basé sur la productivité pour encourager et reconnaître les performances exceptionnelles des employés.", "/images/recompenses_productivite.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Programme de Volontariat d'Entreprise Virtuel", "Permettre aux employés de s'engager dans des activités de volontariat virtuelles pour soutenir des organisations caritatives et communautaires en ligne.", "/images/volontariat_virtuel.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Club de Lecture d'Entreprise", "Créer un club de lecture où les employés peuvent partager et discuter de leurs lectures, favorisant ainsi la culture et l'échange d'idées.", "/images/club_lecture.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    );

CREATE TABLE `Vote` (
    `user_id` INT, `idea_id` INT, `is_vote` BOOLEAN, CONSTRAINT `fk_vote_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_vote_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE, PRIMARY KEY (`user_id`, `idea_id`)
);

INSERT INTO
    Vote (user_id, idea_id, is_vote)
VALUES (5, 1, 0),
    (6, 1, 1),
    (7, 1, 0),
    (8, 1, 1),
    (9, 1, 0),
    (10, 2, 1),
    (11, 2, 0),
    (12, 2, 1),
    (13, 2, 0),
    (14, 2, 1),
    (15, 3, 0),
    (16, 3, 1),
    (5, 3, 0),
    (6, 3, 1),
    (7, 3, 0),
    (8, 3, 1),
    (9, 3, 0),
    (10, 4, 1),
    (11, 4, 0),
    (12, 4, 1),
    (13, 4, 0),
    (14, 4, 1),
    (15, 5, 0),
    (16, 5, 1),
    (5, 5, 0),
    (6, 5, 1),
    (7, 5, 0),
    (8, 5, 1),
    (9, 5, 0),
    (10, 6, 1),
    (11, 6, 0),
    (12, 6, 1),
    (13, 6, 0),
    (14, 6, 1),
    (15, 7, 0),
    (16, 7, 1),
    (5, 7, 0),
    (6, 7, 1),
    (7, 7, 0),
    (8, 7, 1),
    (9, 7, 0),
    (10, 8, 1),
    (11, 8, 0),
    (12, 8, 1),
    (13, 8, 0),
    (14, 8, 1),
    (15, 9, 0),
    (16, 9, 1),
    (5, 9, 0),
    (6, 9, 1),
    (7, 9, 0),
    (8, 9, 1),
    (9, 9, 0),
    (10, 10, 1),
    (11, 10, 0),
    (12, 10, 1),
    (13, 10, 0),
    (14, 10, 1),
    (15, 11, 0),
    (16, 11, 1),
    (5, 11, 0),
    (6, 11, 1),
    (7, 11, 0),
    (8, 11, 1),
    (9, 11, 0),
    (10, 12, 1),
    (11, 12, 0),
    (12, 12, 1),
    (13, 12, 0),
    (14, 12, 1),
    (15, 13, 0),
    (16, 13, 1),
    (5, 13, 0),
    (6, 13, 1),
    (7, 13, 0),
    (8, 13, 1),
    (9, 13, 0),
    (10, 14, 1),
    (11, 14, 0),
    (12, 14, 1),
    (13, 14, 0),
    (14, 14, 1),
    (15, 15, 0),
    (16, 15, 1),
    (5, 15, 0),
    (6, 15, 1),
    (7, 15, 0),
    (8, 15, 1),
    (9, 15, 0),
    (10, 16, 1),
    (11, 16, 0),
    (12, 16, 1),
    (13, 16, 0),
    (14, 16, 1);

CREATE TABLE `Impacted_user` (
    `user_id` INT, `idea_id` INT, CONSTRAINT `fk_impacted_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_impacted_user_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE, PRIMARY KEY (`user_id`, `idea_id`)
);

INSERT INTO
    Impacted_user (user_id, idea_id)
VALUES (2, 1),
    (3, 1),
    (4, 2);

CREATE TABLE `Comment` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, `user_id` INT, `idea_id` INT, `description` VARCHAR(500) NOT NULL, CONSTRAINT `fk_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_comment_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `idea` (`id`) ON DELETE CASCADE
);

INSERT INTO
    Comment (user_id, idea_id, description)
VALUES (
        3, 1, "Super idée! J'adore la créativité derrière cela. "
    ),
    (
        2, 3, "C'est une idée intéressante, mais peut-être pourriez-vous explorer davantage?  Cela pourrait résoudre certains défis potentiels et rendre l'idée encore plus robuste"
    ),
    (
        1, 3, "Je suis vraiment enthousiaste à propos de cette idée!"
    ),
    (
        6, 1, "C'est une excellente initiative! J'attends avec impatience ce repas de Noël festif."
    ),
    (
        7, 1, "Peut-on envisager des options végétariennes pour le repas? Ce serait génial pour ceux qui ne mangent pas de viande."
    ),
    (
        8, 1, "J'aime cette idée de rassembler tout le monde pour célébrer les fêtes. Comptez sur moi pour aider à l'organisation."
    ),
    (
        9, 1, "Est-ce que quelqu'un peut prendre en charge la décoration? Je suis partant pour contribuer!"
    ),
    (
        10, 1, "Je propose d'organiser des jeux et des activités amusantes pendant le repas. Qu'en pensez-vous?"
    ),
    (
        1, 2, "C'est une demande légitime. Des fenêtres défectueuses peuvent vraiment affecter le confort au travail."
    ),
    (
        4, 2, "On pourrait peut-être obtenir des devis pour évaluer le coût de ce projet? Cela faciliterait la prise de décision."
    ),
    (
        7, 2, "Je suis d'accord, il est temps de remédier à ce problème. Allons de l'avant avec le remplacement des fenêtres."
    ),
    (
        9, 2, "Je peux contribuer à la recherche de fournisseurs de fenêtres de qualité. Qui d'autre est partant?"
    ),
    (
        11, 2, "Je suggère d'opter pour des fenêtres écoénergétiques pour réduire notre empreinte environnementale."
    ),
    (
        2, 3, "Bonne idée! Une télé dans la salle de pause pourrait vraiment détendre l'atmosphère."
    ),
    (
        5, 3, "Je propose de créer une liste de films et de séries que nous pourrions regarder ensemble. Des suggestions?"
    ),
    (
        8, 3, "Cela pourrait également être une opportunité pour des séances de jeux vidéo en équipe. Qui est partant pour une partie?"
    ),
    (
        10, 3, "Pouvons-nous également envisager des abonnements à des plateformes de streaming pour avoir plus de choix?"
    ),
    (
        12, 3, "Je suis partant pour contribuer à l'installation de la télé et à la création d'un système de réservation pour son utilisation."
    ),
    (
        3, 4, "Je pense qu'une journée d'intégration serait formidable pour renforcer les liens entre les équipes. J'apporte mes idées!"
    ),
    (
        6, 4, "Peut-on organiser des activités de team-building amusantes? Cela facilitera la communication entre les nouveaux et les anciens employés."
    ),
    (
        9, 4, "Je suggère de faire participer différentes équipes à des jeux collaboratifs pour renforcer la cohésion."
    ),
    (
        11, 4, "Je peux aider à planifier des activités de groupe. Pouvons-nous commencer à discuter des idées spécifiques?"
    ),
    (
        13, 4, "Nous pourrions organiser un déjeuner informel pour favoriser les conversations. Qui veut prendre en charge la logistique de la nourriture?"
    ),

(
    1, 5, "Le mentorat peut vraiment aider les nouveaux employés à s'intégrer rapidement. Je suis prêt à être mentor!"
),
(
    4, 5, "Nous pourrions créer des paires de mentorat basées sur les compétences pour maximiser les avantages. Des suggestions?"
),
(
    7, 5, "Il serait également utile de prévoir des séances régulières de suivi pour évaluer le progrès des paires de mentorat."
),
(
    10, 5, "Je suis intéressé à être mentoré. Comment pouvons-nous faciliter la mise en place de ce programme?"
),
(
    12, 5, "Un programme de mentorat formel pourrait vraiment améliorer la transmission des connaissances au sein de l'équipe. J'appuie cette idée!"
),
(
    2, 6, "Je suggère d'inclure des espaces de travail flexibles pour favoriser la collaboration inter-équipes."
),
(
    5, 6, "Pourquoi ne pas organiser une séance de remue-méninges pour recueillir des idées sur l'amélioration des espaces de travail?"
),
(
    8, 6, "Je suis en faveur d'une approche centrée sur l'ergonomie pour garantir le bien-être des employés dans leurs postes de travail."
),
(
    11, 6, "Pouvons-nous envisager d'intégrer des zones de détente avec des plantes pour créer un environnement plus apaisant?"
),
(
    13, 6, "C'est une excellente initiative! Je suis prêt à contribuer à la réalisation de cette amélioration."
),
(
    1, 7, "Les formations inter-équipes peuvent renforcer la synergie entre les départements. Quels sujets spécifiques devrions-nous aborder?"
),
(
    4, 7, "Je propose d'inclure des sessions interactives pour encourager la participation active des équipes lors des formations."
),
(
    7, 7, "Est-ce que des formations en ligne pourraient également être envisagées pour la flexibilité des horaires des employés?"
),
(
    10, 7, "Je suis partant pour partager mes compétences lors de ces formations inter-équipes. Qui est intéressé par quel sujet?"
),
(
    12, 7, "C'est une excellente opportunité d'apprentissage mutuel. Nous pourrions également inviter des experts externes pour certaines sessions."
),
(
    2, 8, "Je suggère d'organiser des ateliers pratiques pour encourager les employés à adopter des habitudes écologiques au quotidien."
),
(
    5, 8, "Pouvons-nous envisager d'utiliser des matériaux recyclés pour les fournitures de bureau et le mobilier?"
),
(
    8, 8, "Je suis passionné par les initiatives écologiques. Je peux coordonner la création de supports de sensibilisation visuels."
),
(
    11, 8, "Comment pouvons-nous mesurer l'impact écologique positif de cette campagne au fil du temps?"
),
(
    13, 8, "Je propose d'instaurer des défis mensuels pour encourager les employés à adopter des pratiques écoresponsables."
),
(
    1, 9, "Les récompenses peuvent vraiment motiver les employés. Pouvons-nous discuter des types de récompenses à mettre en place?"
),
(
    4, 9, "Je suggère d'inclure des reconnaissances publiques pour valoriser les réalisations individuelles."
),
(
    7, 9, "Pourquoi ne pas créer un comité de récompenses impliquant des employés de différents départements?"
),
(
    10, 9, "Je suis prêt à contribuer à la conception d'un système de points pour suivre les performances des employés."
),
(
    12, 9, "C'est une excellente idée! Des récompenses peuvent également renforcer l'esprit d'équipe."
),
(
    2, 10, "Je suis partant pour aider à organiser ces événements sociaux. Des suggestions sur les types d'événements que nous pourrions organiser?"
),
(
    5, 10, "Pouvons-nous établir un calendrier annuel d'événements pour que les employés puissent planifier à l'avance?"
),
(
    8, 10, "Je propose d'inclure des activités qui favorisent l'intégration des nouveaux employés lors de ces événements."
),
(
    11, 10, "Est-ce que des événements virtuels pourraient également être envisagés pour inclure les employés en télétravail?"
),
(
    13, 10, "C'est une excellente idée pour renforcer les liens entre les collègues en dehors de l'environnement de travail."
),
(
    1, 11, "Une application interne peut vraiment améliorer la communication. Quels sont les fonctionnalités prioritaires à inclure?"
),
(
    4, 11, "Je propose d'organiser des séances de formation pour aider les employés à utiliser efficacement l'application."
),
(
    7, 11, "Comment pouvons-nous assurer la sécurité des données lors de l'utilisation de cette application interne?"
),
(
    10, 11, "Je suis prêt à collaborer avec l'équipe informatique pour le développement de cette application."
),
(
    12, 11, "Cela pourrait être une excellente initiative pour rationaliser nos processus internes. J'appuie cette idée!"
),
(
    2, 12, "Je suggère d'inclure des séances de méditation et des cours de yoga dans le programme de bien-être."
),
(
    5, 12, "Pouvons-nous également organiser des ateliers sur la gestion du stress et l'équilibre travail-vie personnelle?"
),
(
    8, 12, "Je suis partant pour coordonner les activités liées au bien-être. Des idées sur la fréquence de ces sessions?"
),
(
    11, 12, "Est-ce que des initiatives telles que des concours de remise en forme pourraient également être intégrées au programme?"
),
(
    13, 12, "C'est une excellente manière de prendre soin de la santé mentale de nos employés. Merci pour cette proposition!"
),
(
    2, 13, "Je peux aider à organiser cet événement d'intégration. Des suggestions pour les activités que nous pourrions inclure?"
),
(
    5, 13, "Pouvons-nous envisager des jeux de team-building pour encourager l'interaction entre les nouveaux employés et les anciens?"
),
(
    8, 13, "Je propose d'inclure une séance de présentation pour que chacun puisse mieux connaître ses collègues."
),
(
    11, 13, "Est-ce que des ateliers sur la culture d'entreprise pourraient également être inclus dans l'événement?"
),
(
    13, 13, "C'est une excellente façon de créer des liens dès le début. Je suis partant pour contribuer à la réussite de cet événement!"
),
(
    1, 14, "Pour l'amélioration des espaces de travail, je suggère d'organiser une séance de brainstorming pour collecter diverses idées."
),
(
    4, 14, "Quels sont les aspects spécifiques de l'espace de travail que nous devrions prioriser pour l'amélioration?"
),
(
    7, 14, "Je suis en faveur d'une approche participative où les employés peuvent contribuer à la conception de leurs espaces de travail."
),
(
    10, 14, "Pouvons-nous également envisager d'impliquer des professionnels du design pour des suggestions expertes?"
),
(
    12, 14, "Cela pourrait vraiment améliorer l'ambiance et la productivité. Je suis prêt à participer à ce projet!"
),
(
    2, 15, "Je soutiens pleinement l'idée d'un projet RSE. Quels domaines spécifiques devrions-nous cibler?"
),
(
    5, 15, "Pouvons-nous également impliquer les employés dans le choix de l'organisme de bienfaisance ou de la cause à soutenir?"
),
(
    8, 15, "Je propose d'organiser des événements caritatifs où les employés peuvent participer activement à la RSE."
),
(
    11, 15, "Comment pouvons-nous mesurer l'impact positif de notre engagement dans des projets RSE?"
),
(
    13, 15, "C'est une excellente opportunité d'être une force positive dans notre communauté. Je suis prêt à contribuer à ce projet!"
),
(
    1, 16, "Le mentorat peut être bénéfique pour le développement professionnel. Quelles sont les compétences que nous devrions cibler?"
),
(
    4, 16, "Je propose d'organiser des séances d'orientation pour les participants au programme de mentorat."
),
(
    7, 16, "Pouvons-nous encourager les mentors à partager leurs expériences de carrière et leurs conseils lors de sessions informelles?"
),
(
    10, 16, "Je suis partant pour être mentor. Comment pouvons-nous jumeler efficacement mentors et mentorés?"
),
(
    12, 16, "C'est une excellente initiative pour favoriser la croissance professionnelle. Je suis prêt à soutenir cette idée!"
),
(
    2, 17, "Je soutiens l'idée d'une journée sans réunion. Cela pourrait vraiment améliorer la productivité individuelle."
),
(
    5, 17, "Pouvons-nous envisager des alternatives comme des mises à jour écrites pour les journées sans réunion?"
),
(
    8, 17, "Je propose d'encourager une communication plus asynchrone pendant les journées sans réunion."
),
(
    11, 17, "Est-ce que cette initiative pourrait s'étendre à d'autres équipes? Comment pouvons-nous faire connaître cette idée?"
),
(
    13, 17, "C'est une excellente idée pour permettre aux employés de se concentrer sur des tâches individuelles. Je suis prêt à la soutenir!"
),
(
    1, 18, "La boîte à idées virtuelle peut favoriser l'innovation. Pouvons-nous garantir l'anonymat des suggestions?"
),
(
    4, 18, "Je suggère d'inclure des récompenses pour les meilleures idées soumises à la boîte à idées."
),
(
    7, 18, "Comment pouvons-nous assurer une réponse rapide aux idées soumises pour montrer que chaque suggestion est valorisée?"
),
(
    10, 18, "Je suis prêt à collaborer sur la mise en place et la gestion de cette boîte à idées virtuelle."
),
(
    12, 18, "C'est une excellente initiative pour encourager la créativité. Je suis enthousiaste à l'idée de voir les suggestions qui émergeront!"
),
(
    2, 19, "La formation continue est essentielle. Pouvons-nous également envisager des programmes de formation en ligne pour la flexibilité?"
),
(
    5, 19, "Je propose de créer un calendrier de formation annuel pour que les employés puissent planifier leur développement professionnel."
),
(
    8, 19, "Comment pouvons-nous personnaliser les programmes de formation en fonction des besoins individuels des employés?"
),
(
    11, 19, "Je suis partant pour partager mes compétences lors de certaines sessions de formation. Quels sujets seraient les plus demandés?"
),
(
    13, 19, "C'est une excellente initiative pour stimuler la croissance professionnelle. Je suis prêt à soutenir cette idée!"
),
(
    1, 20, "Pour l'amélioration de la communication interne, je suggère d'organiser des réunions régulières pour discuter des progrès."
),
(
    4, 20, "Pouvons-nous également envisager d'utiliser des outils de communication modernes pour faciliter les échanges rapides?"
),
(
    7, 20, "Je propose de créer un guide de bonnes pratiques pour la communication interne afin de garantir la clarté."
),
(
    10, 20, "Comment pouvons-nous inclure les employés en télétravail dans les initiatives de communication interne?"
),
(
    12, 20, "C'est une excellente idée pour renforcer la transparence et l'efficacité de la communication. Je suis prêt à contribuer à cette amélioration!"
),
(
    2, 21, "Je suis enthousiaste à l'idée d'aménager des espaces collaboratifs. Des suggestions pour rendre ces espaces plus stimulants?"
),
(
    5, 21, "Pouvons-nous envisager des zones dédiées à des projets spécifiques pour encourager la collaboration inter-équipes?"
),
(
    8, 21, "Je propose d'inclure des éléments de design inspirants pour stimuler la créativité dans ces espaces."
),
(
    11, 21, "Est-ce que des espaces de détente peuvent également être inclus pour favoriser un environnement de travail équilibré?"
),
(
    13, 21, "C'est une excellente initiative pour améliorer notre environnement de travail. Je suis partant pour contribuer à cette idée!"
),
(
    1, 22, "Le programme de parrainage est crucial pour l'intégration. Comment pouvons-nous assurer une correspondance efficace entre parrains et nouveaux employés?"
),
(
    4, 22, "Je propose d'organiser des événements sociaux pour que les parrains et les nouveaux employés puissent mieux se connaître."
),
(
    7, 22, "Comment pouvons-nous mesurer le succès du programme de parrainage en termes d'intégration et de satisfaction des nouveaux employés?"
),
(
    10, 22, "Je suis partant pour être parrain. Pouvons-nous mettre en place des formations pour les parrains?"
),
(
    12, 22, "C'est une excellente initiative pour favoriser une intégration harmonieuse. Je suis prêt à soutenir cette idée!"
),
(
    2, 23, "Je suis excité à l'idée d'un hackathon interne. Des suggestions pour les thèmes que nous pourrions explorer lors de cet événement?"
),
(
    5, 23, "Pouvons-nous encourager la diversité d'idées en formant des équipes interfonctionnelles pour le hackathon?"
),
(
    8, 23, "Je propose d'inclure des mentors pour guider les participants pendant le hackathon."
),
(
    11, 23, "Est-ce que cet événement pourrait également servir de plateforme pour transformer les idées en projets concrets?"
),
(
    13, 23, "C'est une excellente façon de stimuler la créativité et la collaboration. Je suis partant pour contribuer à la réussite de ce hackathon!"
),
(
    1, 24, "Le système de récompenses basé sur la productivité est une excellente idée. Des suggestions pour les types de récompenses que nous pourrions offrir?"
),
(
    4, 24, "Pouvons-nous inclure des reconnaissances publiques pour valoriser les efforts des employés?"
),
(
    7, 24, "Comment pouvons-nous garantir que le système de récompenses est équitable et motivant pour tous les employés?"
),
(
    10, 24, "Je suis prêt à collaborer sur la mise en place de ce système de récompenses. Quels critères devrions-nous considérer?"
),
(
    12, 24, "C'est une excellente initiative pour promouvoir la productivité et la motivation. Je suis enthousiaste à l'idée de contribuer!"
),
(
    2, 25, "Je soutiens l'idée du volontariat d'entreprise virtuel. Comment pouvons-nous faciliter la participation des employés?"
),
(
    5, 25, "Pouvons-nous créer des partenariats avec des organisations caritatives en ligne pour diversifier les opportunités de volontariat?"
),
(
    8, 25, "Je propose d'organiser des séances d'information pour sensibiliser les employés aux activités de volontariat virtuel."
),
(
    11, 25, "Est-ce que cet engagement pourrait également être intégré à nos initiatives de responsabilité sociale des entreprises (RSE)?"
),
(
    13, 25, "C'est une excellente façon d'étendre notre impact social. Je suis prêt à soutenir cette idée!"
),
(
    1, 26, "Le club de lecture est une excellente initiative culturelle. Comment pouvons-nous encourager la participation active des membres?"
),
(
    4, 26, "Pouvons-nous créer une liste de lecture mensuelle pour guider les discussions du club de lecture?"
),
(
    7, 26, "Comment pouvons-nous assurer une diversité de genres littéraires pour répondre aux goûts variés des participants?"
),
(
    10, 26, "Je suis partant pour animer certaines sessions du club de lecture. Quels thèmes seraient les plus intéressants?"
),
(
    12, 26, "C'est une excellente façon de favoriser la culture et l'échange intellectuel. Je suis prêt à contribuer à la réussite de ce club de lecture!"
),
(
    12, 27, "C'est une excellente initiative pour stimuler l'innovation. Comment pouvons-nous rendre le programme de récompenses encore plus attractif?"
),
(
    2, 27, "Je suis d'accord, nous devrions peut-être inclure des catégories spécifiques d'innovation à récompenser. Des idées?"
),
(
    5, 27, "Pouvons-nous également envisager des reconnaissances spéciales pour les innovations qui ont un impact significatif sur notre entreprise?"
),
(
    8, 27, "Comment assurer la transparence dans le processus de sélection des innovations à récompenser?"
),
(
    11, 27, "C'est une excellente façon de reconnaître les contributions innovantes. Je suis prêt à collaborer sur cette idée!"
),
(
    2, 28, "Le développement professionnel est crucial. Comment pouvons-nous personnaliser le programme pour répondre aux besoins spécifiques des employés?"
),
(
    5, 28, "Pouvons-nous explorer des partenariats avec des institutions externes pour offrir des formations spécialisées?"
),
(
    8, 28, "Je suis partant pour participer à la conception de modules de formation. Quels sujets seraient les plus pertinents?"
),
(
    11, 28, "Comment pouvons-nous mesurer l'efficacité du programme en termes d'avancement professionnel des employés?"
),
(
    13, 28, "C'est une excellente initiative pour favoriser le développement continu. Je suis prêt à soutenir cette idée!"
),
(
    12, 29, "Organiser une semaine dédiée à la diversité est essentiel. Comment pouvons-nous rendre les événements inclusifs pour tous les employés?"
),
(
    2, 29, "Pouvons-nous inclure des ateliers interactifs pour sensibiliser les employés aux enjeux de la diversité?"
),
(
    5, 29, "Comment garantir la représentation de toutes les communautés dans les activités de la semaine de la diversité?"
),
(
    8, 29, "Je suis prêt à participer à l'organisation d'événements. Quels thèmes seraient les plus pertinents?"
),
(
    11, 29, "C'est une excellente façon de promouvoir la diversité et l'inclusion. Je suis enthousiaste à l'idée de contribuer!"
),
(
    2, 30, "La cybersécurité est cruciale. Comment pouvons-nous rendre la campagne informative tout en maintenant l'engagement des employés?"
),
(
    5, 30, "Pouvons-nous inclure des simulations d'attaques pour renforcer la compréhension des employés sur les menaces cybernétiques?"
),
(
    8, 30, "Je propose d'organiser des sessions de questions-réponses pour aborder les préoccupations spécifiques des employés."
),
(
    11, 30, "Comment mesurerons-nous l'efficacité de la campagne en termes de renforcement de la sécurité des données?"
),
(
    13, 30, "C'est une excellente initiative pour renforcer la sensibilisation. Je suis prêt à soutenir cette idée!"
),
(
    12, 31, "Créer une bibliothèque numérique est une excellente idée. Comment pouvons-nous organiser le contenu pour le rendre facilement accessible?"
),
(
    2, 31, "Pouvons-nous permettre aux employés de contribuer en partageant des ressources qu'ils trouvent utiles?"
),
(
    5, 31, "Comment assurer la mise à jour régulière du contenu de la bibliothèque pour qu'il reste pertinent?"
),
(
    8, 31, "Je suis partant pour aider à la sélection des ressources. Quels critères devrions-nous considérer?"
),
(
    11, 31, "C'est une excellente initiative pour favoriser l'apprentissage continu. Je suis enthousiaste à l'idée de contribuer!"
),
(
    13, 32, "Recueillir des suggestions pour les espaces collaboratifs est essentiel. Comment pouvons-nous assurer la flexibilité des espaces pour répondre aux différents besoins des équipes?"
),
(
    2, 32, "Pouvons-nous intégrer des technologies collaboratives pour faciliter le travail d'équipe à distance?"
),
(
    5, 32, "Je propose d'organiser des séances de brainstorms pour recueillir des idées créatives d'aménagement."
),
(
    8, 32, "Comment mesurerons-nous l'impact de l'aménagement sur la collaboration et la créativité des équipes?"
),
(
    11, 32, "C'est une excellente façon d'optimiser nos espaces de travail. Je suis prêt à collaborer sur cette idée!"
),
(
    12, 33, "Mettre en place un programme de parrainage est une excellente idée. Comment pouvons-nous garantir une communication ouverte entre parrains et nouveaux employés?"
),
(
    2, 33, "Pouvons-nous organiser des sessions d'orientation pour les parrains afin de les préparer à leur rôle?"
),
(
    5, 33, "Comment évaluerons-nous l'efficacité du programme en termes d'intégration des nouveaux employés?"
),
(
    8, 33, "Je suis partant pour être parrain. Comment pouvons-nous faire correspondre les compétences des parrains avec les besoins des nouveaux employés?"
),
(
    11, 33, "C'est une excellente façon de faciliter l'intégration. Je suis enthousiaste à l'idée de contribuer!"
),
(
    13, 34, "Organiser un hackathon interne est stimulant. Comment pouvons-nous encourager la participation de tous les départements?"
),
(
    2, 34, "Pouvons-nous offrir des incitations spéciales pour les projets qui ont un potentiel concret d'implémentation?"
),
(
    5, 34, "Je propose d'organiser des ateliers de préparation pour aider les équipes à affiner leurs idées avant le hackathon."
),
(
    8, 34, "Comment pouvons-nous assurer une évaluation impartiale des projets pendant le hackathon?"
),
(
    11, 34, "C'est une excellente initiative pour stimuler l'innovation. Je suis prêt à soutenir cette idée!"
),
(
    12, 35, "Proposer un système de récompenses basé sur la productivité est une excellente idée. Comment pouvons-nous définir des critères équitables pour mesurer la productivité?"
),
(
    2, 35, "Pouvons-nous inclure des récompenses flexibles pour s'adapter aux différents styles de travail des employés?"
),
(
    5, 35, "Je propose d'organiser des ateliers sur l'efficacité au travail pour aider les employés à maximiser leur productivité."
),
(
    8, 35, "Comment assurerons-nous la transparence dans le processus de sélection des employés méritants?"
),
(
    11, 35, "C'est une excellente façon de valoriser la productivité. Je suis prêt à collaborer sur cette idée!"
);