<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190803104809 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E98486F9AC');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E98486F9AC FOREIGN KEY (adress_id) REFERENCES adress (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE subscription DROP FOREIGN KEY FK_A3C664D34A3353D8');
        $this->addSql('ALTER TABLE subscription DROP FOREIGN KEY FK_A3C664D393035F72');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D34A3353D8 FOREIGN KEY (app_user_id) REFERENCES app_user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D393035F72 FOREIGN KEY (alert_id) REFERENCES alert (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E98486F9AC');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E98486F9AC FOREIGN KEY (adress_id) REFERENCES adress (id)');
        $this->addSql('ALTER TABLE subscription DROP FOREIGN KEY FK_A3C664D393035F72');
        $this->addSql('ALTER TABLE subscription DROP FOREIGN KEY FK_A3C664D34A3353D8');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D393035F72 FOREIGN KEY (alert_id) REFERENCES alert (id)');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D34A3353D8 FOREIGN KEY (app_user_id) REFERENCES app_user (id) ON DELETE SET NULL');
    }
}
