import { Avis} from "app/enums/avis";
import { Statut} from "app/enums/statut";
import { User} from "app/models/user";
import { Candidat} from "app/models/candidat.model";
import { Time } from "@angular/common";

export class EntretienTechnique {
  id: number;
  title: string;
  date_entretien_tec: Date;
  heure_entretien_tec: Time;
  lien_reunion: string;
  motivation: string;
  commentaire: string;
  conclusion_quest: string;
  avis_tec: Avis;
  justif_avis: string;
  rapportTech: Blob;
  statutEntretien: Statut;
  candidat: Candidat;
  evaluateurs: User[];
}