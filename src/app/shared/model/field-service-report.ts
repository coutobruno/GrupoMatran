

export class FieldServiceReport {


    constructor(
        public $key:string,
        public reportMonthYear:string,
        public placements:string,
        public videoShowings:string,
        public hours:string,
        public returnVisits:string,
        public totalDifferentBibleStudiesConducted:string,
        public comments:string,
        public publisherId:string) {
            
        }

        static fromJson({$key, reportMonthYear, placements, videoShowings, hours, returnVisits, totalDifferentBibleStudiesConducted, comments, publisherId}): FieldServiceReport {

            return new FieldServiceReport(
                $key,
                reportMonthYear,
                placements,
                videoShowings,
                hours,
                returnVisits,
                totalDifferentBibleStudiesConducted,
                comments,
                publisherId);

        }

        static fromJsonArray(json : any[]): FieldServiceReport[] {
            
            return json.map(FieldServiceReport.fromJson);
        }
}