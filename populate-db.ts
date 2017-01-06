import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";

console.log('Initializing Firebase database ...');

initializeApp(firebaseConfig);

const publishersRef = database().ref('publishers');
const fieldServiceReportsRef = database().ref('fieldServiceReports');

dbData.publishers.forEach( publisher => {

    console.log('adding publisher', publisher.firstName);

    const publisherRef = publishersRef.push({
        firstName: publisher.firstName,
        lastName: publisher.lastName
    });

    let fieldServiceReportKeysPerPublisher = [];

    publisher.fieldServiceReports.forEach((fieldServiceReport:any) => {

        console.log('adding report ', fieldServiceReport.reportMonthYear);

        fieldServiceReportKeysPerPublisher.push(fieldServiceReportsRef.push({
            reportMonthYear: fieldServiceReport.reportMonthYear,
            placements: fieldServiceReport.placements,
            videoShowings: fieldServiceReport.videoShowings,
            hours: fieldServiceReport.hours,
            returnVisits: fieldServiceReport.returnVisits,
            totalDifferentBibleStudiesConducted: fieldServiceReport.totalDifferentBibleStudiesConducted,
            comments: fieldServiceReport.comments,
            publisherId: publisherRef.key
        }).key);
    });

    const association = database().ref('fieldServiceReportsPerPublisher');

    const fieldServiceReportsPerPublisher = association.child(publisherRef.key);

    fieldServiceReportKeysPerPublisher.forEach(fieldServiceReportKey => {

        console.log('adding field service report to publisher ');

        const fieldServiceReportPublisherAssociation = fieldServiceReportsPerPublisher.child(fieldServiceReportKey);

        fieldServiceReportPublisherAssociation.set(true);
    });
});