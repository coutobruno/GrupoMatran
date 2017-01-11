

export class Publisher {


    constructor(
        public $key:string,
        public firstName:string,
        public lastName:string) {
            
        }

        static fromJson({$key, firstName, lastName}): Publisher {

            return new Publisher(
                $key,
                firstName,
                lastName);

        }

        static fromJsonArray(json : any[]): Publisher[] {

            return json.map(Publisher.fromJson);
        }
}