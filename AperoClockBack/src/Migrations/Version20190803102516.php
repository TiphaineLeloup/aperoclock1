<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190803102516 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE guest CHANGE app_user_id app_user_id INT NOT NULL, CHANGE event_id event_id INT NOT NULL');
        $this->addSql('ALTER TABLE guest ADD CONSTRAINT FK_ACB79A354A3353D8 FOREIGN KEY (app_user_id) REFERENCES app_user (id)');
        $this->addSql('ALTER TABLE guest ADD CONSTRAINT FK_ACB79A3571F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE guest DROP FOREIGN KEY FK_ACB79A354A3353D8');
        $this->addSql('ALTER TABLE guest DROP FOREIGN KEY FK_ACB79A3571F7E88B');
        $this->addSql('ALTER TABLE guest CHANGE app_user_id app_user_id INT DEFAULT NULL, CHANGE event_id event_id INT DEFAULT NULL');
    }
}
