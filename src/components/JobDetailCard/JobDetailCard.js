import { Card } from "flowbite-react";
import { jobDetailsPropTypes } from "../../propTypes/job";

export function JobDetailCard({ jobDetails }) {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Unsplash-image"
            imgSrc={jobDetails.data ? jobDetails.data.urls.regular : '/images/no-image.jpg'}
        >
            <div className="flex flex-row justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {jobDetails.name}
                </h5>
                <p><span>Status:&nbsp;</span>{jobDetails.status}</p>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <span>Category:&nbsp;</span>
                {jobDetails.category}
            </p>
        </Card>
    );
}

JobDetailCard.propTypes = {
    jobDetails: jobDetailsPropTypes.isRequired,
};
