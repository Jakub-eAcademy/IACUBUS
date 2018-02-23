import {LocationEntity} from "./location.entity";
import {MapEntity} from "./map.entity";
import {Entity, OneToMany, OneToOne, PrimaryColumn, RelationOptions} from "typeorm";
import {TextblockEntity} from "./textblock.entity";
import {PictureBlockEntity} from "./pictureBlock.entity";
import {LinkblockEntity} from "./linkblock.entity";
import {VideoBlockEntity} from "./videoblock.entity";
import {VisitJournalEntity} from "./visit-journal.entity";

@Entity("Learnplace")
export class LearnplaceEntity {

  @PrimaryColumn()
  objectId: number;

  @OneToOne(type => LocationEntity, location => location.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  location: LocationEntity;

  @OneToOne(type => MapEntity, map => map.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  map: MapEntity;

  @OneToMany(type => VisitJournalEntity, visitJournal => visitJournal.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  visitJournal: Array<VisitJournalEntity>;

  @OneToMany(type => TextblockEntity, textBlock => textBlock.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  textBlocks: Array<TextblockEntity>;

  @OneToMany(type => PictureBlockEntity, pictureBlock => pictureBlock.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  pictureBlocks: Array<PictureBlockEntity>;

  @OneToMany(type => LinkblockEntity, linkBlock => linkBlock.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  linkBlocks: Array<LinkblockEntity>;

  @OneToMany(type => VideoBlockEntity, videoBlock => videoBlock.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  videoBlocks: Array<VideoBlockEntity>;
}