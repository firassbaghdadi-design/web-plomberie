export interface EtatAction {
  ok?: boolean;
  erreur?: string;
  details?: { champ: string; message: string }[];
  message?: string;
  donnees?: Record<string, unknown>;
  n?: number;
}
