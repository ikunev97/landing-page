import { useState } from "react";
import { ChevronDownIcon } from "../../common/components/ChevronDownIcon";
import { ChevronUpIcon } from "../../common/components/ChevronUpIcon";
import SectionTitle from "../../common/components/SectionTitle";
import LayoutWrapper from "../../common/layoutWrapper/LayoutWrapper";
import { IServiceItem, IAgencySerivices as Services } from "../../types";
import styles from "./AgencyServicesStyles.module.css";

type IAgencyServices = {
  agencyServices: Services;
};

const AgencyServices = ({ agencyServices }: IAgencyServices): JSX.Element => {
  const [selectedService, setSelectedService] = useState<IServiceItem>(
    agencyServices && agencyServices.items[0]
  );

  const handleSelectService = (item: IServiceItem) => {
    setSelectedService(item);
  };

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <SectionTitle align="center" title={agencyServices.title} />
        <div className={styles.content_holder}>
          <div className={styles.items_holder}>
            {agencyServices &&
              agencyServices.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      background:
                        selectedService.title === item.title
                          ? "#EDEDED"
                          : "inherit",
                    }}
                    className={styles.item}
                    onClick={() => handleSelectService(item)}
                  >
                    <div>
                      <p
                        style={{
                          color:
                            selectedService.title === item.title
                              ? "#1C73A8"
                              : "inherit",
                        }}
                        className={styles.item_title}
                      >
                        {item.title}
                      </p>
                      {selectedService.title === item.title &&
                        selectedService.description !== "" && (
                          <p className={styles.item_description}>
                            {selectedService.description}
                          </p>
                        )}
                    </div>
                    {selectedService.title === item.title ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </div>
                );
              })}
          </div>

          <div className={styles.image_holder}>
            {selectedService?.image !== undefined && (
              <img src={selectedService?.image} alt={selectedService.title} />
            )}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default AgencyServices;
